import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isAuthenticated: boolean = this.auth.isAuth;

  constructor(private auth: AuthService) {
    this.auth.googleLogin().subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

}
