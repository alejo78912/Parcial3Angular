import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { invitadoguardGuard } from './invitadoguard.guard';

describe('invitadoguardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => invitadoguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
