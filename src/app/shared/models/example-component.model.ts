import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TimeZone } from './timezone.enum';

export interface ExampleComponentViewModel {
  currentTimeZone: TimeZone;
  email: string;
  firstName: string;
  formGroup: FormGroup;
  guid: string;
  id: number;
  lastName: string;
  showIsValidMessage$: Observable<boolean>;
}
