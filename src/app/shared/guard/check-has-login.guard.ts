import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, RouterEvent, NavigationEnd} from '@angular/router';
import { LoginService } from '../service/login.service';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CheckHasLoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const loginStatusData = this.loginService.loginStatusDto;

    if (!loginStatusData && state.url === '/cms') {
      this.router.navigate(['login']);
      return false;
    }
    // if (loginStatusData && state.url === '/login' || !loginStatusData && state.url !== '/login') {
    //   this.router.navigate(['']);
    //   return false;
    // }

    return true;
  }
}
