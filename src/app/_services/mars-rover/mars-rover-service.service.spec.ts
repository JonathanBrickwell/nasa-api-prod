import { TestBed } from '@angular/core/testing';

import { MarsRoverServiceService } from './mars-rover-service.service';

describe('MarsRoverServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarsRoverServiceService = TestBed.get(MarsRoverServiceService);
    expect(service).toBeTruthy();
  });
});
