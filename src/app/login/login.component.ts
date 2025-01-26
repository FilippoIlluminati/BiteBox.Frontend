import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private router: Router, private auth: AuthService, private userService: UserService) {
    this.auth.googleLogin().subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

  ngOnInit() {
    this.auth.initGoogleLogin();
    // @ts-ignore
    google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById('google-button'),
      { theme: 'outline', size: 'large', width: '100%' }
    );
    // @ts-ignore
    google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }

  onLogin() {
    this.userService.login(this.loginData.email, this.loginData.password).subscribe(
      (response: any) => {
        this.userService.saveToken(response.token);
        this.router.navigate(['/']);
      },
      () => {
        this.errorMessage = 'Email o password non validi.';
      }
    );
  }

  onRegister() {
    this.errorMessage = ''; // Reset error messages
    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'Inserisci email e password per registrarti.';
      return;
    }

    this.userService.register(this.loginData.email, this.loginData.password).subscribe(
      () => {
        alert('Registrazione completata con successo! Ora puoi accedere.');
      },
      (error) => {
        this.errorMessage =
          error.status === 400
            ? 'Email già in uso o password non valida.'
            : 'Errore durante la registrazione. Riprova più tardi.';
      }
    );
  }
}
