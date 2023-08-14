import { Component, OnDestroy, OnInit } from '@angular/core';
import { MockViewModel } from './models/mock-models/mock-view-model';
import { TypescriptCongifClass } from './models/mock-models/typescript-config.model';
import { MockPatternService } from './shared/mock-pattern.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public vm: MockViewModel;
  public title = 'angular-in-app-styleguide';

  constructor(private mockPatternService: MockPatternService) {}

  public ngOnInit() {
    const typescriptMockClass: TypescriptCongifClass = new TypescriptCongifClass();
    console.log('ts mock class log foo value', typescriptMockClass['foo']);
    this.vm = {
      name: 'John',
      guid: '123-456-8DDD',
      isActive: true,
      ordinal: 12,
      formGroup: undefined,
    };

    this.handleSetMockServiceSubjectValue();
    this.handleSetMockPrimitiveValue();
    this.createFormGroup();
  }

  public ngOnDestroy() {}

  public createFormGroup(): void {
    this.vm.formGroup;
  }

  public handleSetMockServiceSubjectValue(): void {
    this.mockPatternService.updatedMockPatternVar = this.vm;
    console.log('value of getMockPatternExample', this.mockPatternService.getMockPatternExample.getValue());
  }

  public handleSetMockPrimitiveValue(): void {
    this.mockPatternService.updateMockPrimitiveValue = false;
    console.log('mock pattern service primitive value', this.mockPatternService.getMockPrimitiveValue);
  }

  public handleUpdateServiceClick(): void {
    this.mockPatternService.updateMockPrimitiveValue = true;
    console.log('get after click set mock primitive value isTrue', this.mockPatternService.getMockPrimitiveValue);
  }
}
