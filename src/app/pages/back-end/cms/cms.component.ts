import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../shared/service/login.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {
  isExpanded = true;
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    // eslint-disable-next-line no-console
    console.log(this.loginService.loginStatusDto);
  }

  handleSidebarToggle(): void {
    this.isExpanded = !this.isExpanded;
  }

}
