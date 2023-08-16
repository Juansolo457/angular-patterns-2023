import { FormGroup } from '@angular/forms';
import { TimeZone } from './timezone.enum';

export interface ExampleComponentViewModel {
  currentTimeZone: TimeZone;
  firstName: string;
  formGroup: FormGroup;
  guid: string;
  id: number;
  lastName: string;
}
