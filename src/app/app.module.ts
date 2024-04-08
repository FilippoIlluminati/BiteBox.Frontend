import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardComponent } from './card/card.component';
import { MenuScrollComponent } from './menu-scroll/menu-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardComponent,
    MenuScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
