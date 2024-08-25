import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../enviroment/enviroment.local';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) {}

  signup = (user: any):Observable<any> => {
   return this._HttpClient.post(baseUrl + 'api/v1/auth/signup',user);
  };
  signin = (user: any):Observable<any> => {
    return this._HttpClient.post(baseUrl + 'api/v1/auth/signin',user);
   };

   saveUserData = () => {
    let token = localStorage.getItem('token')
    if (token) {
      try {
        let decoded = jwtDecode(token)
        console.log(decoded);
        
      } catch (error) {
        localStorage.clear()
      }
   }
}


}