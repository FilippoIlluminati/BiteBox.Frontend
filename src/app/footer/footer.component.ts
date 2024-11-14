import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
