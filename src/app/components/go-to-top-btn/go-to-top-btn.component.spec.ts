import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToTopBtnComponent } from './go-to-top-btn.component';

describe('GoToTopBtnComponent', () => {
  let component: GoToTopBtnComponent;
  let fixture: ComponentFixture<GoToTopBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToTopBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToTopBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
