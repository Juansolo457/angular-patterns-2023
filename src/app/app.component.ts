import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MockViewModel } from './shared/models/mock-view-model';
import { MockPatternService } from './shared/services/mock-pattern.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy, OnInit {
  public vm: MockViewModel;
  public unsubscribe$: Subject<void>;
  public constructor(private mockPatternService: MockPatternService) {
    this.unsubscribe$ = new Subject<void>();
  }

  public ngOnInit() {
    this.vm = {
      formGroup: undefined,
      guid: '123-456-8DDD',
      isActive: true,
      name: 'John',
      ordinal: 12,
    };

    this.handleSetMockServiceSubjectValue();
    this.handleSetMockPrimitiveValue();
    this.createFormGroup();
  }
  public ngOnDestroy(): void {
    this.unsubscribe$.next(undefined);
    this.unsubscribe$.complete();
  }

  public createFormGroup(): void {
    // Form group logic goes here.
    // this.vm.formGroup = new FormGroup(undefined);
  }

  public handleSetMockServiceSubjectValue(): void {
    this.mockPatternService.updatedMockPatternVar = this.vm;
  }

  public handleSetMockPrimitiveValue(): void {
    this.mockPatternService.updateMockPrimitiveValue = false;
  }

  public handleUpdateServiceClick(): void {
    this.mockPatternService.updateMockPrimitiveValue = true;
  }
}
