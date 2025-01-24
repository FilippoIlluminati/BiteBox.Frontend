import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { OrdinaComponent } from './ordina/ordina.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {AuthGuard} from "./guards/auth.guard";
import {LoginGuard} from "./guards/logged-in.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'howitworks',
    component: HowItWorksComponent
  },
  {
    path: 'ordina',
    canActivate: [AuthGuard],
    component: OrdinaComponent
  },
  {
    path: 'cartpage',
    canActivate: [AuthGuard],
    component: CartPageComponent
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    component: CheckoutComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top' // Ripristina lo scroll in cima ad ogni cambio di rotta
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
