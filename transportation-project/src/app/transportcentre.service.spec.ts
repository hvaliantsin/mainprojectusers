import { TestBed } from '@angular/core/testing';

import { TransportcentreService } from './transportcentre.service';

describe('TransportcentreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransportcentreService = TestBed.get(TransportcentreService);
    expect(service).toBeTruthy();
  });
});
