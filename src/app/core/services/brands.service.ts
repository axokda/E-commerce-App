import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../enviroment/enviroment.local';
import { Brand } from '../interfaces/brands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  constructor(private httpClient: HttpClient) {}

  getAllBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(`${baseUrl}/api/v1/brands`);
  }

  getSpecificBrand(id: string): Observable<Brand> {
    return this.httpClient.get<Brand>(`${baseUrl}/api/v1/brands/${id}`);
  }
}