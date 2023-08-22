import { FormGroup } from '@angular/forms';

export interface ActivityWeightFormViewModel {
  activityLabel: string;
  activityLevelHrs: number;
  bodyWeight: number;
  bodyWeightLabel: string;
  formGroup: FormGroup;
  highEndCarbPerGram: number;
  highEndFatPerGram: number;
  highEndMeatPerDay: number;
  highEndProteinPerGram: number;
  highEndTotalCaloriesTotal: number;
  invalidActivityLevelWarning: string;
  invalidWeightWarning: string;
  lowEndCarbPerGram: number;
  lowEndFatPerGram: number;
  lowEndMeatPerDay: number;
  lowEndProteinPerGram: number;
  lowEndTotalCaloriesTotal: number;
  submitButtonEnabled: boolean;
}
