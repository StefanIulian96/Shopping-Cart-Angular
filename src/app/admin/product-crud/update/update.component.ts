import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  id: number | undefined;
  productsCategory: Product[] = [];
  
  productForm = this.fb.group({
    name: [''],
    description: [''],
    category: [''],
    imageurl: [''],
    price: [''],
    quantity: [''],
  });

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log('this.id', this.id);
    this.productsService.getAllCategory().subscribe((res) => {
      this.productsCategory = res;
    }
    );
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public productsService: ProductsService,
    private route:ActivatedRoute
  ) {}
  submitForm() {
    this.productsService.update(this.id as any, this.productForm.value).subscribe((res) => {
      alert('Product updated!');
      this.router.navigateByUrl('admin/product');
    });
  }
}
