import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  [x: string]: any;
  slides = [
    { image: './assets/slide3.jpeg', caption: 'First Slide' },
    { image: './assets/slide2.jpeg', caption: 'Second Slide' }
  ];

    isAuthenticated: boolean = false;
  
    constructor(private authService: AuthService) {}
  
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
