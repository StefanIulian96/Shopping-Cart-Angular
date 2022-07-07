import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/productCategory.model';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-produc-category-list',
  templateUrl: './produc-category-list.component.html',
  styleUrls: ['./produc-category-list.component.scss']
})
export class ProducCategoryListComponent implements OnInit {


  public categories: ProductCategory[] = [];

  constructor(private ProductCategoryService: ProductCategoryService, private formBuilder: FormBuilder) { }

  createCategoryForm = this.formBuilder.group({
    name: [''],
    description: [''],
  });

  deleteCategoryForm = this.formBuilder.group({
    id: ['']
  });

  updateCategoryForm = this.formBuilder.group({
    name: [''],
    description: [''],
    id: ['']
  });

  ngOnInit(): void {
    this.ProductCategoryService.getAllCategories().subscribe((data) => this.categories = data);
    console.log(this.categories);
  }

  getCategories() {
    this.ProductCategoryService.getAllCategories().subscribe((data) => this.categories = data);
  }

  addCategory(category: ProductCategory) {
    this.ProductCategoryService.addCategory(this.createCategoryForm.value).subscribe((data: ProductCategory) => {
      console.log('Category Created');
    });
  }

  updateCategory(id: number, category: ProductCategory) {
    this.ProductCategoryService.updateCategory(this.updateCategoryForm.value.id, this.updateCategoryForm.value).subscribe((data: ProductCategory) => {
      console.log('Category Updated');
    });
  }

  //  this method uses 'deprecated' subscribe method
  // deleteCategory(id: number) {
  //   this.ProductCategoryService.deleteCategory(this.deleteCategoryForm.value.id).subscribe(
  //     (data: ProductCategory) => {
  //       console.log('Category Deleted');
  //     },
  //     (error) => {
  //       console.error(`There is no Category with id:${this.deleteCategoryForm.value.id} `);
  //     }
  //   );
  // }


  // here we use the new '.subscribe()' method that take in an Observable object as a parameter;
  // for it you need to create the 2 functions below, handleResponse and handleError, to be passed into the Observable object
  // .bind() is used to make the body of this.handleError be the one found inside the declaration of the function
  handleDeleteResponse() {
    console.log('Category Deleted')
  }

  handleError() {
    console.error(`There is no Category with id:${this.deleteCategoryForm.value.id} `);
  }

  deleteCategory(id: number) {
    this.ProductCategoryService.deleteCategory(this.deleteCategoryForm.value.id).subscribe({
      next: this.handleDeleteResponse.bind(this),
      error: this.handleError.bind(this)
    })
  }
}
