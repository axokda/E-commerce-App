import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../enviroment/enviroment.local';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class _CartService {


  constructor(private _HttpClient: HttpClient) { }

  addProductToCart = (productId: string): Observable<any> => {
    return this._HttpClient.post(baseUrl + "api/v1/cart", { productId }, {
      headers: {
        Token: localStorage.getItem('token')!
      }
    });
  }
  updateProductQTY = (productId: string, count: number): Observable<any> => {
    return this._HttpClient.put(`${baseUrl}api/v1/cart/${productId}`, { count }, {
      headers: {
        token: localStorage.getItem('token')!
      }
    })
  }
  removeItem = (productId: string): Observable<any> => {
    return this._HttpClient.delete(`${baseUrl}api/v1/cart/${productId}`, {
      headers: {
        token: localStorage.getItem('token')!
      }
    })
  }
  clearCart = (): Observable<any> => {
    return this._HttpClient.delete(`${baseUrl}api/v1/cart/`, {
      headers: {
        token: localStorage.getItem('token')!
      }
    })
  }
  getLoggedUserCart = (): Observable<any> => {
    return this._HttpClient.get(`${baseUrl}api/v1/cart/`, {
        headers: {
          token: localStorage.getItem('token')!
        }
    })
}
}
