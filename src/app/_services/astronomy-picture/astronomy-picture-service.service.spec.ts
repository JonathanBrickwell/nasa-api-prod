import { TestBed } from '@angular/core/testing';

import { AstronomyPictureServiceService } from './astronomy-picture-service.service';

describe('AstronomyPictureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AstronomyPictureServiceService = TestBed.get(AstronomyPictureServiceService);
    expect(service).toBeTruthy();
  });
});
