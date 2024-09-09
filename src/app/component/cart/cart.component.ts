import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { _CartService } from '../../core/services/cart.service';
import { Cart } from '../../core/interfaces/cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart: Cart = {} as Cart;
isLoading: boolean = true;

private readonly _CartService = inject(_CartService);
private readonly toastr = inject(ToastrService);


getLoggedUserCart = () => {
  this._CartService.getLoggedUserCart().subscribe({
    next: (res) => {
      console.log(res);
      this.cart = res;
      this.isLoading = false;
    },
    error: (err) => {
      console.log(err);
      this.isLoading = false;
    }
  })
}


  deleteItem(productId: string) {
    this._CartService.removeItem(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.cart = res; 
        this.toastr.success('Product deleted successfully', '', {
          progressBar: true,         
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateQTY = (productId: string, count: number) => {
    this._CartService.updateProductQTY(productId, count).subscribe({
      next: (res) => {
        console.log(res);
        this.cart = res;
        this.toastr.success('Product updated successfully', '', {
          progressBar: true,         
        });
        
      },
      error: (err) => {
        console.log(err);
      }
      
    });
  };

  ngOnInit(): void {
    this.getLoggedUserCart(); 
  }

}


