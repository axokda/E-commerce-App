import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http: HttpClient) {}

  addProductToWishlist(productId: string, string: any) {
    const headers = new HttpHeaders().set('Authorization', `Bearer your_token`); // Replace with your actual token
    const body = { productId };

    this.http.post('https://ecommerce.routemisr.com/api/v1/wishlist', body, { headers })
      .subscribe(
        (response) => {
          // Handle successful wishlist addition (e.g., show a success message)
          console.log('Product added to wishlist successfully:', response);
        },
        (error) => {
          // Handle errors (e.g., display an error message)
          console.error('Error adding product to wishlist:', error);
        }
      );
  }
}