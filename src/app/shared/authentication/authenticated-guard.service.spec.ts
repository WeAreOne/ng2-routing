/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AuthenticatedGuard } from './authenticated-guard.service';

describe('Service: AuthenticatedGuard', () => {
  beforeEach(() => {
    addProviders([AuthenticatedGuard]);
  });

  it('should ...',
    inject([AuthenticatedGuard],
      (service: AuthenticatedGuard) => {
        expect(service).toBeTruthy();
      }));
});
