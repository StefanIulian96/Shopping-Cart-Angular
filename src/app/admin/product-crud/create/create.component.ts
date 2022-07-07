import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  productForm = this.fb.group({
    name: [''],
    description: [''],
    category: [''],
    imageURL: [''],
    price: [''],
    quantity: [''],
  });

  productsCategory: Product[] = [];

  ngOnInit() {
    this.productsService.getAllCategory().subscribe((res) => {
      this.productsCategory = res;
    }
    );
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public productsService: ProductsService
  ) { }




  submitForm() {
    this.productsService.create(this.productForm.value).subscribe((res) => {
      alert('Product created!');
      this.router.navigateByUrl('admin/product');
    });
  }
}
