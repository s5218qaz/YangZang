import { TestBed } from '@angular/core/testing';

import { CheckHasLoginGuard } from './check-has-login.guard';

describe('CheckHasLoginGuard', () => {
  let guard: CheckHasLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckHasLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
