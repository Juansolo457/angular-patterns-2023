import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRipple, RippleRef } from '@angular/material/core';
import { debounceTime, merge, of, Subject, takeUntil } from 'rxjs';
import { ExampleComponentViewModel } from '../../shared/models/example-component.model';
import { CustomValidators } from '../../shared/validators/custom-validators';

@Component({
  selector: 'app-example',
  styleUrls: ['./example.component.scss'],
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit, OnDestroy {
  public vm: ExampleComponentViewModel;
  public radius: number;
  public color: string = '#D3D3D3';
  @ViewChild(MatRipple) private ripple: MatRipple;
  private unsubscribe$: Subject<void>;

  /** Shows a centered and persistent ripple. */

  public constructor() {
    this.unsubscribe$ = new Subject<void>();
  }

  public ngOnInit() {
    this.vm = {
      currentTimeZone: undefined,
      email: 'email@123.com',
      firstName: '',
      formGroup: undefined,
      guid: '',
      id: undefined,
      lastName: '',
      showIsValidMessage$: undefined,
    };
    this.createFormGroup();
    this.subscribeFormGroupChanges();
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public createFormGroup(): void {
    this.vm.formGroup = new FormGroup({
      exampleEmailFormControl: new FormControl(
        { disabled: false, value: this.vm.email ?? '' },
        CustomValidators.emailValidator(),
      ),
    });
    this.handleFormGroupChanges();
  }

  public launchRipple() {
    const rippleRef: RippleRef = this.ripple.launch({
      centered: true,
      persistent: true,
    });

    // Fade out the ripple later.
    rippleRef.fadeOut();
  }

  private handleFormGroupChanges(): void {
    const valid: boolean = this.vm.formGroup.valid;

    if (valid) {
      this.vm.showIsValidMessage$ = of(true);
      this.launchRipple();
    } else {
      this.vm.showIsValidMessage$ = of(false);
    }
  }

  private subscribeFormGroupChanges(): void {
    merge(this.vm.formGroup.get('exampleEmailFormControl').valueChanges)
      .pipe(debounceTime(750), takeUntil(this.unsubscribe$))
      .subscribe(this.handleFormGroupChanges.bind(this));
  }
}
