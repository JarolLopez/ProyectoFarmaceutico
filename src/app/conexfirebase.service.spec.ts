import { TestBed } from '@angular/core/testing';

import { ConexfirebaseService } from './conexfirebase.service';

describe('ConexfirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConexfirebaseService = TestBed.get(ConexfirebaseService);
    expect(service).toBeTruthy();
  });
});
