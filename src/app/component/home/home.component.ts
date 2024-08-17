import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { product } from '../../core/interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

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
