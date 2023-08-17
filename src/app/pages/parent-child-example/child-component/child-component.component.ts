import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { isDefined } from '../../../../lib/utilities/util';

@Component({
  selector: 'app-child-component',
  styleUrls: ['./child-component.component.scss'],
  templateUrl: './child-component.component.html',
})
export class ChildComponentComponent implements OnChanges, OnInit {
  @Input() public childString: string;
  @Output() public outputToParent: EventEmitter<string> = new EventEmitter<string>();

  public ngOnInit() {
    this.handleOutputToParent();
  }

  public ngOnChanges(changes: SimpleChanges) {
    /* NOTE: you have to access via a string with object bracket notation*/
    if (isDefined(changes['childString'].currentValue)) {
      // console.log('ngOnChanges() - ', changes.childString.currentValue);
    }
  }

  public handleOutputToParent(): void {
    const outputStrToParent: string = 'From Child!';
    this.outputToParent.emit(outputStrToParent);
  }
}
