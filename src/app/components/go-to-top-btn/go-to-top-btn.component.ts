import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-go-to-top-btn',
  templateUrl: './go-to-top-btn.component.html',
  styleUrls: ['./go-to-top-btn.component.scss']
})
export class GoToTopBtnComponent implements OnInit{

  isBtnHidden = true;
  constructor() {}

  ngOnInit(): void {
    this.scroll();
  }

  ngOnDestroy(): void {
    this.scroll();
  }

  scrollTop(): void{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scroll(): void{
    window.addEventListener('scroll', () => {
      this.isBtnHidden = window.pageYOffset > 150 ? false : true;
    });
  }


}
