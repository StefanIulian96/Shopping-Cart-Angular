import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { AddressDetailsComponent } from './user-profile/address-details/address-details/address-details.component';
import { CardDetailsComponent } from './user-profile/card-details/card-details/card-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { CreateComponent } from './admin/product-crud/create/create.component';
import { ProductListComponent } from './admin/product-crud/product-list/product-list.component';

import { ProducCategoryListComponent } from './admin/products/produc-category-list/produc-category-list.component';
import { UserLoginComponent } from './user-auth/user-login/user-login.component';
import { UserRegisterComponent } from './user-auth/user-register/user-register.component';
import { UpdateComponent } from './admin/product-crud/update/update.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: 'product-category-list',
    component: ProducCategoryListComponent,
  },

  {
    path: '',
    component: HomePageComponent,
  },

  {
    path: 'user-profile',
    component: UserProfileComponent,
  },

  {
    path: 'address-details',
    component: AddressDetailsComponent,
  },

  {
    path: 'card-details',
    component: CardDetailsComponent,
  },

  { path: 'crud', redirectTo: 'crud/productList', pathMatch: 'full' },

  { path: 'admin/product', component: ProductListComponent },
  { path: 'admin/product/create', component: CreateComponent },
  { path: 'admin/product/update/:id', component: UpdateComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'shopping-cart', component: CartComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
