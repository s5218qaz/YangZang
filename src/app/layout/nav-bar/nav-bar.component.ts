import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isHamActive = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  isLoginPage(): boolean {
    return this.router.url.includes('login')
      ? true
      : false;
  }

  isCMS(): boolean {
    return this.router.url.includes('cms')
            ? true
            : false;
  }

  clickHam(): void{
    if (!this.isHamActive) {
      this.isHamActive = true;
    } else {
      this.isHamActive = false;
    }
  }

}
