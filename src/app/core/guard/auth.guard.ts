import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  //canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //if (localStorage.getItem('isLoggedin')) {
      // logged in so return true
      //return true;
    //}

    // not logged in so redirect to login page with the return url
    //this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    //return false;
  //}
  canActivate(): boolean {

    if ( this.auth.isAuth() ) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }

  }
}