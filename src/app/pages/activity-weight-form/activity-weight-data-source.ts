import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ActivityWeight } from '../../shared/models/activity-weight';

export class ActivityWeightDataSource implements DataSource<ActivityWeight> {
  private activityWeight$: BehaviorSubject<ActivityWeight[]>;
  private unsubscribe$: Subject<void>;
  public constructor() {
    this.init();
  }
  public get activityWeight(): BehaviorSubject<ActivityWeight[]> {
    return this.activityWeight$;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public connect(collectionViewer: CollectionViewer): Observable<ActivityWeight[]> {
    return this.activityWeight$.asObservable();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public disconnect(collectionViewer: CollectionViewer): void {
    // Method required from implemented DataSource Class, but we don't need to do anything
  }

  // Must be called manually in the containing component's ngOnDestroy
  public destroy(): void {
    this.unsubscribe$?.next();
    this.unsubscribe$?.complete();
    this.activityWeight$?.complete();
  }

  public init(): void {
    this.activityWeight$ = new BehaviorSubject<ActivityWeight[]>([]);
    this.activityWeight$.next([mockActivityWeight]);
    this.subscribeActivityWeightData();
  }

  private subscribeActivityWeightData(): void {
    // TODO: implement updating of results table here
    setTimeout(() => {
      this.activityWeight$.next([updatedMockActivityWeight]);
    }, 7000); // next execution tick trick
  }
}

export const mockActivityWeight: ActivityWeight = {
  highEndCarbPerGram: 4.5,
  highEndFatPerGram: 9,
  highEndMeatPerDay: 200, // in grams
  highEndProteinPerGram: 4,
  highEndTotalCaloriesTotal: 2500,
  lowEndCarbPerGram: 3,
  lowEndFatPerGram: 7,
  lowEndMeatPerDay: 100, // in grams
  lowEndProteinPerGram: 2.5,
  lowEndTotalCaloriesTotal: 1800,
};

export const updatedMockActivityWeight: ActivityWeight = {
  highEndCarbPerGram: 9,
  highEndFatPerGram: 18,
  highEndMeatPerDay: 400, // in grams
  highEndProteinPerGram: 8,
  highEndTotalCaloriesTotal: 5500,
  lowEndCarbPerGram: 6,
  lowEndFatPerGram: 41,
  lowEndMeatPerDay: 411, // in grams
  lowEndProteinPerGram: 9.5,
  lowEndTotalCaloriesTotal: 2555,
};
