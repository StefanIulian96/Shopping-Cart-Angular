import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product, products } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  public grandTotal !: number;
  //items = this.cartService.getItems();

  confirmingDelete?: number;


  constructor(

    private cartService: CartService

  ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
        console.log("Grand Total", this.grandTotal);
      })
      
  }
  removeItem(item: Product) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  deleteProduct(id?: number) {
    if (this.confirmingDelete === id && id !== undefined) {
      //console.log("id = ", id)
      this.cartService.deleteProduct(id);

      this.getItems();
      this.confirmingDelete = undefined;
    } else {
      this.confirmingDelete = id;
    }
    console.log("id = ", id)
  }

  private getItems() {
    this.products = this.cartService.getItems();
  }

  deleteProduct2(id?: number) {


    if (this.confirmingDelete === id && id !== undefined) {
      console.log("id =", id)
      this.cartService.deleteProduct2(id).subscribe(() => {
        this.cartService.getProducts().subscribe((data: Product[]) => {

          this.products = data;
        });;
        this.confirmingDelete = undefined;
      });

    } else {
      this.confirmingDelete = id;
    }

    console.log(id);
  }

}
