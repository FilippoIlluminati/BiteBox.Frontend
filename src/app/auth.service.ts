import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  // Simula un login. In un'app reale, questo metodo dovrebbe contattare un server.
  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') { // Sostituisci con una logica più sicura
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
