import { Component, OnDestroy, OnInit } from '@angular/core';
import { MockViewModel } from './models/mock-models/mock-view-model';
import { TypescriptCongifClass } from './models/mock-models/typescript-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public vm: MockViewModel;
  public title = 'angular-in-app-styleguide';

  public ngOnInit() {
    const typescriptMockClass: TypescriptCongifClass = new TypescriptCongifClass();
    console.log('ts mock class log foo value', typescriptMockClass['foo']);
    this.vm = {
      name: 'John',
      guid: '123-456-8DDD',
      isActive: true,
      ordinal: 12,
    };
  }
  public ngOnDestroy() {}
}
