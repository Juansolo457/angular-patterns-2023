import { FormGroup } from '@angular/forms';

export interface MockViewModel {
  name: string;
  guid: string;
  isActive: boolean;
  ordinal: number;
  formGroup: FormGroup;
}
