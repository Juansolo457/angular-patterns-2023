import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bootstrap-example',
  styleUrls: ['./bootstrap-example.component.scss'],
  templateUrl: './bootstrap-example.component.html',
})
export class BootstrapExampleComponent {
  public constructor(private modalService: NgbModal) {}

  public open(modal: unknown): void {
    this.modalService.open(modal);
  }
}
