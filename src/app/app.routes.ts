import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SignupComponent } from './component/signup/signup.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { BrandsComponent } from './component/brands/brands.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { OrdersComponent } from './component/orders/orders.component';
import { SigninComponent } from './component/signin/signin.component';
import { authGuard } from './core/guard/auth.guard';
import { islogedinGuard } from './core/guard/islogedin.guard';
import { ForgotComponent } from './component/forgot/forgot.component';
import { DetailsComponent } from './component/details/details.component';
import { AddressComponent } from './component/address/address.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [islogedinGuard],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent, title: 'signup' },
      { path: 'signin', component: SigninComponent, title: 'signin' },
      { path: 'forgot', component: ForgotComponent, title: 'forgot' },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'home' },
      { path: 'category', component: CategoriesComponent, title: 'category' },
      { path: 'brands', component: BrandsComponent, title: 'brands' },
      { path: 'products', component: ProductsComponent, title: 'products' },
      { path: 'cart', component: CartComponent, title: 'cart' },
      { path: 'orders', component: OrdersComponent, title: 'orders' },
      { path: 'details/:id', component: DetailsComponent, title: 'details' },
      { path: 'address/:id', component: AddressComponent, title: 'address' },
      { path: 'wishlist', component: WishlistComponent, title: 'wishlist' }
    ]
  },
  { path: '**', component: NotFoundComponent, title: 'not found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
