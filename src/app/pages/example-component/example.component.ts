import { Component, OnInit } from '@angular/core';
import { ExampleComponentViewModel } from '../../shared/models/example-component.model';

@Component({
  selector: 'app-example',
  styleUrls: ['./example.component.scss'],
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {
  public vm: ExampleComponentViewModel;

  public ngOnInit() {
    this.vm = {
      currentTimeZone: undefined,
      firstName: '',
      formGroup: undefined,
      guid: '',
      id: undefined,
      lastName: '',
    };

    this.createFormGroup();
  }

  public createFormGroup(): void {
    // TODO: add form group logic
  }
}
