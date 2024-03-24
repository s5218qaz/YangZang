import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatus = false;

  constructor(
    private router: Router
  ) { }

  login(): void {
    this.loginStatus = true;
    this.router.navigate(['/cms']);
  }

  logout(): void {
    this.loginStatus = false;
    this.router.navigate(['']);
  }

  get loginStatusDto(): boolean {
    return this.loginStatus;
  }
}
