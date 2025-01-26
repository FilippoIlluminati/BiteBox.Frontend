import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:5000/api/User'; // Modifica con l'URL corretto del backend

  constructor(private http: HttpClient) {}

  // Metodo per registrare un nuovo utente
  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/register`, body);
  }

  // Metodo per effettuare il login
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }

  // Metodo per salvare il token JWT
  saveToken(token: string): void {
    localStorage.setItem('jwt_token', token);
  }

  // Metodo per ottenere il token JWT
  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  // Metodo per verificare se l'utente è autenticato
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Metodo per effettuare il logout
  logout(): void {
    localStorage.removeItem('jwt_token');
  }

  // Metodo placeholder per Google Login (personalizzabile)
  initGoogleLogin(): void {
    console.log('Google Login inizializzato.');
  }
}
