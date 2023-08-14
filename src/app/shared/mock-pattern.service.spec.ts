import { TestBed } from '@angular/core/testing';
import { MockViewModel } from '../models/mock-models/mock-view-model';
import { MockPatternService } from './mock-pattern.service';

describe('MockPatternService', () => {
  // TODO: add a mock pattern service to not hit the real "mock" service
  let service: MockPatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockPatternService],
    });
    service = TestBed.inject(MockPatternService);
  });

  it('should get and set mockPatternExample using BehaviorSubject', () => {
    const mockValue: MockViewModel = {
      name: 'John',
      guid: '123-456-8DDD',
      isActive: true,
      ordinal: 12,
      formGroup: undefined,
    };

    // Set the value using the setter
    service.updatedMockPatternVar = mockValue;

    // Get the value using the getter
    const retrievedValue = service.getMockPatternExample.getValue();

    expect(retrievedValue).toEqual(mockValue);
  });

  it('should get and set mockPrimitiveValue', () => {
    const newValue = true;

    // Set the value using the setter
    service.updateMockPrimitiveValue = newValue;

    // Get the value using the getter
    const retrievedValue = service.getMockPrimitiveValue;

    expect(retrievedValue).toEqual(newValue);
  });
});
