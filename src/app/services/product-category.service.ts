import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../models/productCategory.model';
import { APIbaseURL } from '../settings';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  constructor(private http: HttpClient) { }

  private baseURL = APIbaseURL;



  getAllCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`${this.baseURL}/category/getAll`);
  }

  addCategory(data: ProductCategory): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(`${this.baseURL}/category/create`, data);
  }

  updateCategory(id: number, data: ProductCategory): Observable<ProductCategory> {
    return this.http.put<ProductCategory>(`${this.baseURL}/category/update/${id}`, data);
  }

  deleteCategory(id: number): Observable<ProductCategory> {
    return this.http.delete<ProductCategory>(`${this.baseURL}/category/delete/${id}`);
  }
}
