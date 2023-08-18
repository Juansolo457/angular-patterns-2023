import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityWeightFormComponent } from './activity-weight-form.component';

describe('ActivityWeightFormComponent', () => {
  let component: ActivityWeightFormComponent;
  let fixture: ComponentFixture<ActivityWeightFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityWeightFormComponent],
    });
    fixture = TestBed.createComponent(ActivityWeightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
