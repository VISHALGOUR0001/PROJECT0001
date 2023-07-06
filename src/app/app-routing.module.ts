import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ORDERComponent } from './pages/order/order.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'order', component:ORDERComponent},
  {path: 'payments', component:PaymentsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
