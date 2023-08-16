import { FormGroup } from '@angular/forms';

export interface MockViewModel {
  formGroup: FormGroup;
  guid: string;
  isActive: boolean;
  name: string;
  ordinal: number;
}
