import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductCategory } from 'src/app/models/productCategory.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public categories: ProductCategory[] = [];

  public newCategory: ProductCategory | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private ProductCategoryService: ProductCategoryService
  ) { }

  // inputForm = this.formBuilder.group({
  //   name: ['', [Validators.required, Validators.minLength(1)]],
  //   description: ['', [Validators.required, Validators.minLength(1)]],
  // });ng

  ngOnInit(): void {
    // this.ProductCategoryService.getAllCategories().subscribe((data) => this.categories = data);
    // console.log(this.categories);
  }

}
