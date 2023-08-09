import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /* #1 View MOdel (VM) implementation */
  // TODO: add mock view model and models Dir with division by domain..
  // public vm: MockViewModel =
  title = 'angular-in-app-styleguide';

  public ngOnInit() {
    // TODO: add mock UP of View model
  }
}


export interface MockViewModel {
  name: string;

}
