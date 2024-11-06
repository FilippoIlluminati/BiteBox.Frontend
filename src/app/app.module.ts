import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { ButtonBlueComponent } from './button-blue/button-blue.component';
import { ButtonRedComponent } from './button-red/button-red.component';
import { ButtonEditComponent } from './button-edit/button-edit.component';
//import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmzonPayComponent } from './amzon-pay/amzon-pay.component';
import { PaypalComponent } from './paypal/paypal.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< Updated upstream
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileOrdiniComponent } from './profile-ordini/profile-ordini.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { RitiroComponent } from './ritiro/ritiro.component';
import { OrdinaComponent } from './ordina/ordina.component';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';


=======
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardComponent,
    ButtonBlueComponent,
    ButtonRedComponent,
    ButtonEditComponent,
    FooterComponent,
    LoginComponent,
    AmzonPayComponent,
    PaypalComponent,
    ProfileComponent,
    RatingTableComponent,
    HowItWorksComponent,
    NavbarComponent,
    SingUpComponent,
    RitiroComponent,
    ProfileOrdiniComponent,
    OrdinaComponent,
    AreaRiservataComponent
=======
    AccediComponent,
    SegnalibroComponent,
    AmzonPayComponent,
    PaypalComponent,
    NavbarComponent,
    CartPageComponent,
    CheckoutComponent,
>>>>>>> Stashed changes
  ],

  imports: [
    CommonModule,
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
