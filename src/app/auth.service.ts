import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  private googleLogin$ = new Subject<any>();

  initGoogleLogin() {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: "377248105148-m98jqpt828n5sna0ohtu9bgir2figd1j.apps.googleusercontent.com",
      callback: this.googleLoginResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,

    });
    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("google-button"),
      { theme: "outline", size: "large", width: "100%" }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }

  googleLogin = () => this.googleLogin$.asObservable();

  private googleLoginResponse(response: any) {
    this.googleLogin$.next(response);
  }

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  checkAuthentication(): boolean {
    return this.isAuthenticated;
  }
}
