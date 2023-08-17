import { Component, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bootstrap-example',
  styleUrls: ['./bootstrap-example.component.scss'],
  templateUrl: './bootstrap-example.component.html',
})
export class BootstrapExampleComponent {
  public closeResult: string = '';

  public constructor(private modalService: NgbModal) {}

  public open(content: TemplateRef<void>): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: ModalDismissReasons) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason: ModalDismissReasons) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
