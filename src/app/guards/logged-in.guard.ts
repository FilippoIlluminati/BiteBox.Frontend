import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuth) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
