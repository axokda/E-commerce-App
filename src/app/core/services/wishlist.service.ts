import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../enviroment/enviroment.local';
import { environment } from '../../enviroment/enviroment.local';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  removeFromWishlist(id: string) {
    throw new Error('Method not implemented.');
  }
  private readonly _HttpClient = inject(HttpClient)

  wishListId:WritableSignal<string[]> = signal([])
  countWishItems:WritableSignal<number> = signal(0)

  addProductToWishlist(productId:string):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/wishlist`,
      {
        'productId': productId
      }
    )

  }

  getProductWishlist():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/wishlist`)
  }

  removeProductWishlist(id:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/wishlist/${id}`)
  }
}