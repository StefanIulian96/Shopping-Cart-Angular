import { Injectable } from '@angular/core';
import { Product, products } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { APIbaseURL } from 'settings';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  found: boolean = false;
  items: Product[] = [];
  idCart: number = 0;
  //public i: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");


  // addToCart(products: Product) {
  //   this.items.push(products);
  // }

  // getItems() {
  //   return this.items;
  // }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }

  constructor(private http: HttpClient) { }

  private baseURL = APIbaseURL;

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/api/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseURL}/api/products/${id}`);
  }

  setProduct(product: Product) {
    this.items.push(product);
    this.productList.next(product);
  }
  addtoCart(product: Product) {
    
    this.items.push(product);
    this.productList.next(this.items);
  }

  quantity() {
    let quantity = 1;
    this.items.map((x: Product) => {
      quantity += x.quantity;
    })
    console.log("qunatity = ", quantity)
    return quantity;
   
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.items.map((x: Product) => {
      grandTotal += x.price;
    })
    return grandTotal;
  }
  removeCartItem(product: Product) {
    this.items.map((x: Product, index: number) => {
      if (product.id === x.id) {
        this.items.splice(index, 1);
      }
    })
    this.productList.next(this.items);
  }
  removeAllCart() {
    this.items = []
    this.productList.next(this.items);
  }

  getProducts() {
    return this.productList.asObservable();
  }

  deleteProduct(id: number) {
    this.items = this.items.filter(product => product.id !== id);
    this.productList.next(this.items);
  }

  getItems() {
  
      return this.items;
  }

  deleteProduct2(id?: number): Observable<void> {
    if (!id) {

      return of();
    }

    console.log(id)
    return this.http.delete<void>(`${this.baseURL}/product/delete/${id}`);

  }
}
