import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { gamerguardGuard } from './gamerguard.guard';

describe('gamerguardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gamerguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
