import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActiviyWeightFormViewModel } from '../../shared/models/activity-weight-form-view-model.model';
import { CustomValidators } from '../../shared/validators/custom-validators';

@Component({
  selector: 'app-activity-weight-form',
  styleUrls: ['./activity-weight-form.component.scss'],
  templateUrl: './activity-weight-form.component.html',
})
export class ActivityWeightFormComponent implements OnInit {
  public vm: ActiviyWeightFormViewModel;

  public ngOnInit() {
    this.vm = {
      activityLevelHrs: 4,
      bodyWeight: 150,
      formGroup: undefined,
      isValidCalculation: false,
    };
    this.createFormGroup();
  }

  public createFormGroup(): void {
    this.vm.formGroup = new FormGroup({
      bodyWeight: new FormControl(
        { disabled: false, value: this.vm.bodyWeight ?? 0 },
        CustomValidators.weightInPoundsValidator(),
      ),
    });
    this.handleFormGroupChanges();
  }

  public handleFormGroupChanges(): void {
    // TODO: Add handle form group changes
  }
}
