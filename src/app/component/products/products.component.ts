import { Component, OnInit } from '@angular/core';
import { product } from '../../core/interfaces/product';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  allproducts: product[] =[] ;
  
  constructor(private _ProductsService: ProductsService) {}
  getProducts = () => {
    this._ProductsService.getproducts().subscribe((res) => {
      this.allproducts= res.data;
    },
  error => {
    console.log(error);
  },
  
  
  );
  };
  
  ngOnInit(): void {
    this.getProducts();
  }
  
  }
  