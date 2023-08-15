import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockViewModel } from '../models/mock-models/mock-view-model';

@Injectable({
  providedIn: 'root',
})
export class MockPatternService {
  private mockSubjectPatternExample$: BehaviorSubject<MockViewModel> = new BehaviorSubject<MockViewModel>(undefined);
  private _mockPrimitiveNumber: boolean;

  public get getMockPatternExample(): BehaviorSubject<MockViewModel> {
    return this.mockSubjectPatternExample$;
  }

  public set updatedMockPatternVar(mockVal: MockViewModel) {
    this.mockSubjectPatternExample$.next(mockVal);
  }

  public get getMockPrimitiveValue(): boolean {
    return this._mockPrimitiveNumber;
  }

  public set updateMockPrimitiveValue(data: boolean) {
    this._mockPrimitiveNumber = data;
  }
}
