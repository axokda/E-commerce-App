import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../enviroment/enviroment.local';
import { environment } from '../../enviroment/enviroment.local';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  removeFromWishlist(id: string) {
    throw new Error('Method not implemented.');
  }
  private readonly _HttpClient = inject(HttpClient)


  addProductToWishlist(productId: string): Observable<any> {
    return this._HttpClient.post(baseUrl + "api/v1/wishlist", {
      productId
    }, {
      headers: {
        token: localStorage.getItem("token")!
      }
    }
    )

  }

  getProductWishlist(): Observable<any> {
    return this._HttpClient.get(`${baseUrl}api/v1/wishlist`,{
      headers:{
        token: localStorage.getItem("token")!
      }
    })
  }

  removeProductWishlist(id: string): Observable<any> {
    return this._HttpClient.delete(`${baseUrl}api/v1/wishlist/${id}`,{
      headers:{
        token: localStorage.getItem("token")!
      }
    })
  }
}