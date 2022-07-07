import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-auth/user-login/user-login.component';
import { UserRegisterComponent } from './user-auth/user-register/user-register.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './admin/product-crud/product-list/product-list.component';
import { CreateComponent } from './admin/product-crud/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CardDetailsComponent } from './user-profile/card-details/card-details/card-details.component';
import { AddressDetailsComponent } from './user-profile/address-details/address-details/address-details.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';

import { UpdateComponent } from './admin/product-crud/update/update.component';

import { ProducCategoryListComponent } from './admin/products/produc-category-list/produc-category-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ProductListComponent,
    CreateComponent,
    UserProfileComponent,
    CardDetailsComponent,
    AddressDetailsComponent,
    HomePageComponent,
    UpdateComponent,
    ProducCategoryListComponent,
    ProductDetailsComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
