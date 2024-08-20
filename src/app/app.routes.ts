import { Routes } from '@angular/router';
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

export const routes: Routes = [
    {path:'',component:AuthLayoutComponent,children:[
        {path:'',redirectTo:'signin',pathMatch:'full'},
        {path:'signup',component:SignupComponent,title:'signup'},
        {path:'signin',component:SignupComponent,title:'signin'},
    ]},
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent,title:'home'},
        {path:'category',component:CategoriesComponent,title:'category'},
        {path:'brands',component:BrandsComponent,title:'brands'},
        {path:'products',component:ProductsComponent,title:'products'},
        {path:'cart',component:CartComponent,title:'cart'},
        {path:'orders',component:OrdersComponent,title:'orders'},
    ]},
    {path:'**',component:NotFoundComponent,title:'not found'}
];

