import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { ButtonBlueComponent } from './button-blue/button-blue.component';
import { ButtonRedComponent } from './button-red/button-red.component';
import { ButtonEditComponent } from './button-edit/button-edit.component';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccediComponent } from './accedi/accedi.component';
import { SegnalibroComponent } from './segnalibro/segnalibro.component';
import { PayCheckComponent } from './Paypal/pay-check.component';
import { AmzonPayComponent } from './amzon-pay/amzon-pay.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardComponent,
    ButtonBlueComponent,
    ButtonRedComponent,
    ButtonEditComponent,
    EditPopupComponent,
    FooterComponent,
    EditPopupComponent,
    AccediComponent,
    SegnalibroComponent,
    PayCheckComponent,
    AmzonPayComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }