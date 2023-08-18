import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isUndefined } from '../../../lib/utilities/util';

/* eslint-disable no-null/no-null */

export const emailRegex: RegExp = /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/;

export class CustomValidators {
  public static patternValidator(regex: RegExp, errorName: string): ValidatorFn {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (control: AbstractControl): { [key: string]: any } | null => {
      const result: boolean = regex.test(control.value.trim());
      return result ? null : JSON.parse(`{ "${errorName}": { "value": true } }`);
    };
  }

  // Angular email validator is not validating the top level domain.Ex: foo@bar is valid email
  public static emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control?.value?.trim();
      if (isUndefined(value) || value === '') {
        return null;
      }
      const result: boolean = emailRegex.test(value);
      return result ? null : JSON.parse('{ "email": { "value": true } }');
    };
  }

  public static weightInPoundsValidator(): ValidatorFn {
    const result: boolean = true;
    return (control: AbstractControl): ValidationErrors | null => {
      const value: number = control?.value;
      if (isUndefined(value) || (value === 0 && value > 150)) {
        return null;
      }
      // const result: boolean = emailRegex.test(value);
      // console.log('is 150 or less!', value);
      return result ? null : JSON.parse('{ "email": { "value": true } }');
    };
  }
}
