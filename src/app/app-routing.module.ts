import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { OrdinaComponent } from './ordina/ordina.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'howitworks',
    component: HowItWorksComponent
  },
  {
    path: 'ordina',
    canActivate: [false], // TODO: add authentication checks
    component: OrdinaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
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