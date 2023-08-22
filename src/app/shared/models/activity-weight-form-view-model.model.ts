import { FormGroup } from '@angular/forms';
import { ActivityWeightDataSource } from '../../pages/activity-weight-form/activity-weight-data-source';
import { ActivityWeightColumnName, ActivityWeightDisplayColumns } from './activity-weight.enum';
export interface ActivityWeightFormViewModel {
  ActivityWeightColumnName: typeof ActivityWeightColumnName;
  activityLabel: string;
  activityLevelHrs: number;
  bodyWeight: number;
  bodyWeightLabel: string;
  dataSource: ActivityWeightDataSource;
  displayColumns: ActivityWeightDisplayColumns[];
  formGroup: FormGroup;
  invalidActivityLevelWarning: string;
  invalidWeightWarning: string;
  submitButtonEnabled: boolean;
}
