import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    console.log('CAN ACTIVATED');
    if (this.authService.isLoggedIn()) {
      console.log('IS LOGGED');
      return true;
      // this.router.navigate(['/customer']);
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
