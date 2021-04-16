import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-to-top-btn',
  templateUrl: './go-to-top-btn.component.html',
  styleUrls: ['./go-to-top-btn.component.scss']
})
export class GoToTopBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(){
    const a = document.getElementById("headerLogo");
    a.scrollIntoView({behavior: 'smooth'});
  }

}
