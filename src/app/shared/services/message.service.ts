import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  /* eslint-disable max-lines, max-len, no-irregular-whitespace */
  public static activityLabel: string = 'Activity Level (hours per week)';
  public static bodyWeightLabel: string = 'Goal Body Weight (in lbs)';
  public static invalidWeightWarning: string = 'Please enter a valid weight';
  public static invalidActivityLevelWarning: string = 'Please enter valid Activity Hours per week';
  public constructor() {
    // TODO: (future) add any other services that may need the msg svc
  }
}
