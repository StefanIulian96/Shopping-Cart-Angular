import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { APIbaseURL } from '../settings';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  private baseURL = APIbaseURL;
  private categoryURL = `${APIbaseURL}/category`;

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/api/products`);
  }


  create(data: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseURL}/product/create`, data);
  }

  update(id: string | number, data: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseURL}/product/update/${id}`, data);
  }

  delete(id: string | number | undefined): Observable<Product> {
    if (!id) {
      return of();
    }
    return this.http.delete<Product>(`${this.baseURL}/product/delete/${id}`);
  }

  getAllCategory(): Observable<any> {
    return this.http.get<any>(`${this.categoryURL}/getAll`);
  }
}
