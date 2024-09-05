import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Cart } from '../../core/interfaces/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart:Cart={} as Cart 

  private readonly _CartService = inject(CartService);

  getLoggedUserCart(productId: string) {
    this._CartService.getLoggedUserCart(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.cart=res
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteItem=(productId: string)=>{
  
   this._CartService.removeItem(productId).subscribe({
    next: (res) => {
      console.log(res);
   
    },
    error: (err) => {
      console.log(err);
    },
   })

  }

  updateQuantity=(productId: string, count: number)=>{
    this._CartService.updateProductQuantity(productId, count).subscribe({
      next: (res) => {
        console.log(res);
        this.getLoggedUserCart(productId);
        this.getLoggedUserCart(productId); 

      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  ngOnInit(): void {
    const productId = 'your-product-id'; 
    this.getLoggedUserCart(productId); 
  }

}

