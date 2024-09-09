import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { product } from '../../core/interfaces/product';
import { SliderComponent } from "../slider/slider.component";
import { CategoriSliderComponent } from "../categori-slider/categori-slider.component";
import { RouterLink } from '@angular/router';
import { _CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CategoriSliderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  allproducts: product[] = [];

  constructor(private _ProductsService: ProductsService) { }
  private readonly _CartService = inject(_CartService);
  private readonly toastr = inject(ToastrService);

  getProducts = () => {
    this._ProductsService.getproducts().subscribe((res) => {
      this.allproducts = res.data;
    },
      error => {
        console.log(error);
      },


    );
  };


  addToCart = (productId: string) => {
    this._CartService.addProductToCart(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success('Product added successfully', '', {
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
