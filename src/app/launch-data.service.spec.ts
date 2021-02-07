import { TestBed } from '@angular/core/testing';

import { LaunchDataService } from './launch-data.service';

describe('LaunchDataService', () => {
  let service: LaunchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
