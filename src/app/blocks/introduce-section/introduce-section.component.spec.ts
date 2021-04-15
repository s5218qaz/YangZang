import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceSectionComponent } from './introduce-section.component';

describe('IntroduceSectionComponent', () => {
  let component: IntroduceSectionComponent;
  let fixture: ComponentFixture<IntroduceSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduceSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
