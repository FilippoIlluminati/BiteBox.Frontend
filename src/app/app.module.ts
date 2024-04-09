import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { MenuScrollComponent } from './menu-scroll/menu-scroll.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonBlueComponent } from './button-blue/button-blue.component';
import { ButtonRedComponent } from './button-red/button-red.component';
import { ButtonEditComponent } from './button-edit/button-edit.component';
import { EditPopupComponent } from './edit-popup/edit-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardComponent,
    MenuScrollComponent
    NavbarComponent,
    ButtonBlueComponent,
    ButtonRedComponent,
    ButtonEditComponent,
    EditPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
