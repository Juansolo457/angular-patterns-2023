import { TestBed } from '@angular/core/testing';

import { MockPatternService } from './mock-pattern.service';

describe('MockPatternService', () => {
  let service: MockPatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockPatternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
