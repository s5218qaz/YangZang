import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-go-to-top-btn',
  templateUrl: './go-to-top-btn.component.html',
  styleUrls: ['./go-to-top-btn.component.scss']
})
export class GoToTopBtnComponent implements OnInit{

  windowHeight = 0;
  isBtnHide: boolean = true;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); 
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scrollTop(): void{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scroll(){
    this.windowHeight = window.scrollY;
    this.isBtnHide = this.windowHeight > 30 ? false: true; 
    console.log(this.isBtnHide);
  };

}
