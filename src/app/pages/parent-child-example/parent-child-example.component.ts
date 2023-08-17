import { Component, OnInit } from '@angular/core';
import { ParentChildExampleViewModel } from '../../shared/models/parent-child.model';
import { RandomUserService } from '../../shared/services/random-user.service';

@Component({
  selector: 'app-parent-child-example',
  styleUrls: ['./parent-child-example.component.scss'],
  templateUrl: './parent-child-example.component.html',
})
export class ParentChildExampleComponent implements OnInit {
  public vm: ParentChildExampleViewModel;
  public stringFromChild: string;
  public constructor(private randomUserService: RandomUserService) {}
  public ngOnInit() {
    this.vm = {
      childPrimitive: 0,
      parentPrimitive: 0,
      strChild: 'string-child',
      strParent: 'string-parent',
    };
    this.handleGetRandomUser();
  }

  public handleGetRandomUser(): void {
    this.randomUserService.getRandomUser();
  }

  public handleGetChildStr(value: string): void {
    // Value you get from the child being output from child to parent.
    this.stringFromChild = value;
    // console.log('from child to parent str..', value);
  }
}
