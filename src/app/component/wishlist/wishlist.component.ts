import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';
import { Wishlist } from '../../core/interfaces/whishlist';
import { SearchPipe } from "../../core/pipes/search.pipe";
import { _CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [SearchPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})

export class WishlistComponent implements OnInit {

  
  private readonly _wishlistService = inject(WishlistService)
  private readonly _CartService = inject(_CartService)
  private readonly _ToastrService = inject(ToastrService)

  wishlists!: Wishlist[]


  getWishlist() {
    this._wishlistService.getProductWishlist().subscribe({

      next: (res: any) => {
        this.wishlists = res.data
        console.log(this.wishlists);

      }
    })
  }

  removeFromWishlist(id: string) {
    this._wishlistService.removeProductWishlist(id).subscribe({
      next: (res) => {

         this.getWishlist();

        console.log(res);
      }
    })
  }

  addToCart = (productId: string) => {
    this._CartService.addProductToCart(productId).subscribe({
      next: (res) => {
        this._CartService.cartCounter.next(res.numOfCartItems);
        console.log(res);

       this.removeFromWishlist(productId)

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
    this.getWishlist()


  }

}