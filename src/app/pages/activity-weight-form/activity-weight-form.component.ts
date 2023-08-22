import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, merge, Subject, takeUntil } from 'rxjs';
import { isUndefined } from '../../../lib/utilities/util';
import { ActivityWeightFormViewModel } from '../../shared/models/activity-weight-form-view-model.model';
import { ActivityWeightColumnName, ActivityWeightDisplayColumns } from '../../shared/models/activity-weight.enum';
import { MessageService } from '../../shared/services/message.service';
import { ActivityWeightDataSource } from './activity-weight-data-source';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-activity-weight-form',
  styleUrls: ['./activity-weight-form.component.scss'],
  templateUrl: './activity-weight-form.component.html',
})
export class ActivityWeightFormComponent implements OnInit, OnDestroy {
  public vm: ActivityWeightFormViewModel;
  private displayedColumns: ActivityWeightDisplayColumns[] = [
    // Order matters
    ActivityWeightDisplayColumns.Range,
    ActivityWeightDisplayColumns.LowEnd,
    ActivityWeightDisplayColumns.HighEnd,
  ];
  private unsubscribe$: Subject<void>;

  public constructor(private cdRef: ChangeDetectorRef) {
    this.unsubscribe$ = new Subject<void>();
  }

  public ngOnInit() {
    this.vm = {
      activityLabel: MessageService.activityLabel,
      activityLevelHrs: 4,
      ActivityWeightColumnName,
      bodyWeight: 150,
      bodyWeightLabel: MessageService.bodyWeightLabel,
      dataSource: new ActivityWeightDataSource(),
      displayColumns: this.displayedColumns,
      formGroup: undefined,
      invalidActivityLevelWarning: MessageService.invalidActivityLevelWarning,
      invalidWeightWarning: MessageService.invalidWeightWarning,
      submitButtonEnabled: false,
    };
    this.createFormGroup();
    this.subscribeFormGroupChanges();
    this.subscribeResultsTableChanges();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.vm.dataSource.destroy();
  }

  public createFormGroup(): void {
    this.vm.formGroup = new FormGroup({
      activityLevel: new FormControl({ disabled: false, value: this.vm.activityLevelHrs ?? 0 }),
      bodyWeight: new FormControl({ disabled: false, value: this.vm.bodyWeight ?? 0 }),
    });
    this.handleFormGroupChanges();
  }

  public calculateCaloriesToConsume(): void {
    // TODO: implement calories formula..
  }

  private handleFormGroupChanges(): void {
    const bodyWeightInput: AbstractControl = this.vm.formGroup.get('bodyWeight');
    const activityInput: AbstractControl = this.vm.formGroup.get('activityLevel');

    /* Handles Bad inputs - will disable the submit button preventing bad data from being sent out */
    if (
      (isUndefined(bodyWeightInput.value) || bodyWeightInput.value > 500 || bodyWeightInput.value < 0) &&
      bodyWeightInput.dirty
    ) {
      this.vm.formGroup.get('bodyWeight').setErrors({ invalid: true });
      this.cdRef.detectChanges();
    }

    if ((isUndefined(activityInput) || activityInput.value > 168 || activityInput.value < 0) && activityInput.dirty) {
      this.vm.formGroup.get('activityLevel').setErrors({ invalid: true });
      this.cdRef.detectChanges();
    }
  }

  private subscribeFormGroupChanges(): void {
    merge(this.vm.formGroup.get('activityLevel').valueChanges, this.vm.formGroup.get('bodyWeight').valueChanges)
      .pipe(debounceTime(750), takeUntil(this.unsubscribe$))
      .subscribe(this.handleFormGroupChanges.bind(this));
  }

  private subscribeResultsTableChanges(): void {
    this.vm.dataSource.activityWeight.pipe(takeUntil(this.unsubscribe$)).subscribe();
  }
}
