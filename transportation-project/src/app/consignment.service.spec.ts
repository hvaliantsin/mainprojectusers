import { TestBed } from '@angular/core/testing';

import { ConsignmentService } from './consignment.service';

describe('ConsignmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsignmentService = TestBed.get(ConsignmentService);
    expect(service).toBeTruthy();
  });
});
