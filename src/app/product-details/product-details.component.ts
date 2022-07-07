import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../models/product.model';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products?: Product;
  
 

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
       //const routeParams = this.route.snapshot.paramMap;
      // const productIdFromRoute = Number(routeParams.get('productId'));
      // this.products = products.find(product => product.id === productIdFromRoute);
      //console.log(this.products);


      const id = +this.route.snapshot.paramMap.get('productId')!;
      //console.log(productIdFromRoute);
      

       this.cartService.getProduct(id).subscribe((data: Product) => {
         console.log(data);
        this.products = data;
       });

  }

  addtoCart(products: Product) {
    this.cartService.addtoCart(products);
    //window.alert('Your product has been added to the cart!');
  }

}
