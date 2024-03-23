import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatusData = false;

  constructor() { }

  login(): void {
    this.loginStatusData = true;
  }

  logout(): void {
    this.loginStatusData = false;
  }

  get loginStatus(): boolean {
    return this.loginStatusData;
  }
}
