import { Component, OnInit } from '@angular/core';
import { product } from '../../core/interfaces/product';
import { ProductsService } from '../../core/services/products.service';
import { _CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { Wishlist } from '../../core/interfaces/whishlist'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  allproducts: product[] = [];
  wishlists: Wishlist[] = [];

  constructor(
    private _ProductsService: ProductsService,
    private _CartService: _CartService,
    private _WishlistService: WishlistService,
    private _ToastrService: ToastrService
  ) {}

  getProducts = () => {
    this._ProductsService.getproducts().subscribe({
      next: (res) => {
        this.allproducts = res.data;
        this.getWishlist(); 
      },
      error: (error) => {
        console.log(error);
      }
    });
  };

  setWishedProducts() {
    for (let i = 0; i < this.wishlists.length; i++) {
      for (let j = 0; j < this.allproducts.length; j++) {
        if (this.wishlists[i]._id === this.allproducts[j]._id) {
          this.allproducts[j].isWished = true;
        }
      }
    }
  }

  getWishlist() {
    this._WishlistService.getProductWishlist().subscribe({
      next: (res: any) => {
        this.wishlists = res.data;
        this.setWishedProducts();  
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addToCart = (productId: string) => {
    this._CartService.addProductToCart(productId).subscribe({
      next: (res) => {
        this._CartService.cartCounter.next(res.numOfCartItems);
        this._ToastrService.success('Product added successfully to cart', '', {
          progressBar: true,
          progressAnimation: 'increasing',
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  };

  addToWishlist = (productId: string) => {
    this._WishlistService.addProductToWishlist(productId).subscribe({
      next: (res) => {
        this.getWishlist(); 
        this._ToastrService.success('Product added to wishlist', '', {
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
