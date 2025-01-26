import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  slides = [
    { image: './assets/slider1.jpeg' },
    { image: './assets/slider2.jpeg' },
    { image: './assets/slider3.jpeg' }
  ];

    isAuthenticated: boolean = this.authService.isAuth;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
      this.isAuthenticated = this.authService.checkAuthentication();
    }

    // Funzioni per login e logout, se necessarie
    login() {
      this.isAuthenticated = this.authService.login('user', 'password');
    }

    logout() {
      this.authService.logout();
      this.isAuthenticated = false;
    }



}
