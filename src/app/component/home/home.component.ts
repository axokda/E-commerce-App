import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { product } from '../../core/interfaces/product';
import { SliderComponent } from "../slider/slider.component";
import { CategoriSliderComponent } from "../categori-slider/categori-slider.component";
import { RouterLink } from '@angular/router';
import { _CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SoldOutPipe } from '../../core/pipes/sold-out.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,FormsModule,NgxSpinnerModule, CategoriSliderComponent, RouterLink,DatePipe,CurrencyPipe,UpperCasePipe,LowerCasePipe,JsonPipe,SlicePipe,TitleCasePipe,SoldOutPipe,SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  term: string = '';
  allproducts: product[] = [];


  constructor(
    private _ProductsService: ProductsService,
    private token: AuthService,
    private _CartService: _CartService,
    private _ToastrService: ToastrService,
   
  ) {}


  getProducts = () => {
    
    this._ProductsService.getproducts().subscribe({
      next: (res) => {
        this.allproducts = res.data;
      
      },
      error: (error) => {
        console.log(error);
      }
    });
  };


  addToCart = (productId: string) => {
    this._CartService.addProductToCart(productId).subscribe({
      next: (res) => {
        this._CartService.cartCounter.next(res.numOfCartItems);
        console.log(res);
        this._ToastrService.success('Product added successfully', '', {
          progressBar: true,
          progressAnimation: 'increasing',
         
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  };
  
  ngOnInit(): void {
    this.getProducts();
  }

}
