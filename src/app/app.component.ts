import { Component, OnInit } from '@angular/core';
import { MockViewModel } from './models/mock-models/mock-view-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // todo: check this not correct
  public vm: MockViewModel = {} as MockViewModel

  /* #1 View MOdel (VM) implementation */
  // TODO: add mock view model and models Dir with division by domain..
  // public vm: MockViewModel =
  title = 'angular-in-app-styleguide';

  constructor() {}

  public ngOnInit() {
    this.vm = {
      name: 'John',
      guid: '123-456-8DDD',
      isActive: true,
      ordinal: 12
    }
  }
}

