import { FormGroup } from '@angular/forms';

export interface ActiviyWeightFormViewModel {
  activityLevelHrs: number;
  bodyWeight: number;
  formGroup: FormGroup;
  isValidCalculation: boolean;
}
