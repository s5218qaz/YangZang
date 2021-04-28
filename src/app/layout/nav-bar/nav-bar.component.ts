import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isHamActive= false;
  constructor() { }

  ngOnInit(): void {
  }

  clickHam(): void{
    if (!this.isHamActive) {
      this.isHamActive = true;
    } else {
      this.isHamActive = false;
    }
  }

}
