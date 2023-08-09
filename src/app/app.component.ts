import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /* #1 View MOdel (VM) implementation */
  public vm: MockViewModel =
  title = 'angular-in-app-styleguide';
}


export interface MockViewModel {
  name: string;

}
