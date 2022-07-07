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

  product?: Product;
  found: boolean = false;
  items: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    

      const id = +this.route.snapshot.paramMap.get('productId')!;
      //console.log(productIdFromRoute);
      

       this.cartService.getProduct(id).subscribe((data: Product) => {
         console.log(data);
        this.product = data;
       });
       

  }

  addtoCart(product: Product) {
    
    this.found = false;
    this.items.forEach(element => {
      
      if (element.id === product.id) {
        this.found = true;
        element.quantity += 1;
      }
      
    });

    if(!this.found)
    {
        this.cartService.addtoCart(product);
    }
     
  }
}

// getTotalPrice(): number {
//   let grandTotal = 0;
//   this.items.map((x: Product) => {
//     grandTotal += x.price;
//   })
//   return grandTotal;
// }