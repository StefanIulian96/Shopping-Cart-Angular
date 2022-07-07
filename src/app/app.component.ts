import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'main-project-frontend';
  public totalItem: number = 0;

  constructor(

    private cartService: CartService,


  ) { }


  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }



  isLoggedIn: boolean = false;

  logIn() {
    this.isLoggedIn = true;
  }
  logOut() {
    this.isLoggedIn = false;
  }
}
