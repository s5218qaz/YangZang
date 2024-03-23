import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { LoginService } from '../service/login.service';
@Injectable({
  providedIn: 'root'
})
export class CheckHasLoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const hasLogin = this.loginService.loginStatus;

        if (hasLogin && state.url === '/login') {
          this.router.navigate(['']);
            return false;
         }

        if (!hasLogin && state.url !== '/login') {
          this.router.navigate(['']);
          return false;
        }

        return true;
  }
}
