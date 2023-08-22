import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, merge, Subject, takeUntil } from 'rxjs';
import { ActivityWeightFormViewModel } from '../../shared/models/activity-weight-form-view-model.model';
import { MessageService } from '../../shared/services/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-activity-weight-form',
  styleUrls: ['./activity-weight-form.component.scss'],
  templateUrl: './activity-weight-form.component.html',
})
export class ActivityWeightFormComponent implements OnInit {
  public vm: ActivityWeightFormViewModel;
  private unsubscribe$: Subject<void>;

  public constructor(private cdRef: ChangeDetectorRef) {
    this.unsubscribe$ = new Subject<void>();
  }

  public ngOnInit() {
    this.vm = {
      activityLabel: MessageService.activityLabel,
      activityLevelHrs: 4,
      bodyWeight: 150,
      bodyWeightLabel: MessageService.bodyWeightLabel,
      formGroup: undefined,
      highEndCarbPerGram: 0,
      highEndFatPerGram: 0,
      highEndMeatPerDay: 0,
      highEndProteinPerGram: 0,
      highEndTotalCaloriesTotal: 0,
      invalidActivityLevelWarning: MessageService.invalidActivityLevelWarning,
      invalidWeightWarning: MessageService.invalidWeightWarning,
      lowEndCarbPerGram: 0,
      lowEndFatPerGram: 0,
      lowEndMeatPerDay: 0,
      lowEndProteinPerGram: 0,
      lowEndTotalCaloriesTotal: 0,
      submitButtonEnabled: false,
    };
    this.createFormGroup();
    this.subscribeFormGroupChanges();
  }

  public createFormGroup(): void {
    this.vm.formGroup = new FormGroup({
      activityLevel: new FormControl({ disabled: false, value: this.vm.activityLevelHrs ?? 0 }),
      bodyWeight: new FormControl({
        disabled: false,
        value: this.vm.bodyWeight ?? [0, [Validators.required, Validators.max(300)]],
      }),
    });
    this.handleFormGroupChanges();
  }

  public calculateCaloriesToConsume(): void {
    // eslint-disable-next-line no-console
    console.log('submit calories!');
  }

  private handleFormGroupChanges(): void {
    /* Handles Bad inputs - will disable the submit button preventing bad data from being sent out */
    if (this.vm.formGroup.get('bodyWeight').value > 500 && this.vm.formGroup.get('bodyWeight').dirty) {
      this.vm.formGroup.get('bodyWeight').setErrors({ invalid: true });
      this.cdRef.detectChanges();
    }

    if (this.vm.formGroup.get('activityLevel').value > 168 && this.vm.formGroup.get('activityLevel').dirty) {
      this.vm.formGroup.get('activityLevel').setErrors({ invalid: true });
      this.cdRef.detectChanges();
    }
  }

  private subscribeFormGroupChanges(): void {
    merge(this.vm.formGroup.get('activityLevel').valueChanges, this.vm.formGroup.get('bodyWeight').valueChanges)
      .pipe(debounceTime(750), takeUntil(this.unsubscribe$))
      .subscribe(this.handleFormGroupChanges.bind(this));
  }
}
