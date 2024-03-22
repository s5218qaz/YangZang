import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {

  constructor(
    private  router: Router,
  ) { }

  ngOnInit(): void {
  }

  openProdetailPage(): void {
    this.router.navigate(['product/detail/1']);
  }

}
