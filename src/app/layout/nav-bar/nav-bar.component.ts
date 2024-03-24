import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../shared/service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isHamActive = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  hasUrlInclude(url: string): boolean {
    return this.router.url.includes(url)
      ? true
      : false;
  }

  logout(): void {
    this.loginService.logout();
  }

  clickHam(): void{
    if (!this.isHamActive) {
      this.isHamActive = true;
    } else {
      this.isHamActive = false;
    }
  }

}
