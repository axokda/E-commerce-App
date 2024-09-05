import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../enviroment/enviroment.local';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  headers = {
    Token: localStorage.getItem('token')!
  }

  constructor(private _HttpClient: HttpClient) { }

  addProductToCart(productId: string): Observable<any> {
    return this._HttpClient.post(baseUrl + 'api/v1/cart', { productId }, {
      headers: {
        ...this.headers
      }
    });
  }

  updateProductQuantity(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(baseUrl + 'api/v1/cart/' + productId, { count }, {
      headers: {
        ...this.headers
      }
    });
  }

  removeItem(productId: string): Observable<any> {
    return this._HttpClient.delete(baseUrl + 'api/v1/cart' + productId, {
      headers: {
        ...this.headers
      }
    });
  }
  ClearCart(): Observable<any> {
    return this._HttpClient.delete(baseUrl + 'api/v1/cart', {
      headers: {
        ...this.headers
      }
    });
  }

  getLoggedUserCart(productId: string): Observable<any> {
    return this._HttpClient.get(baseUrl + 'api/v1/cart', {
      headers: {
        ...this.headers
      }
    });
  }

}