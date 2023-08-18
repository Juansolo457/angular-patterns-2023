import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockViewModel } from './shared/models/mock-view-model';
import { noop } from 'rxjs';

import SpyInstance = jest.SpyInstance;

/* eslint-disable @typescript-eslint/no-explicit-any */
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties and call methods on ngOnInit', () => {
    const expectedVm: MockViewModel = {
      formGroup: undefined,
      guid: '123-456-8DDD',
      isActive: true,
      name: 'John',
      ordinal: 12,
    };

    component.vm = Object.assign({}, expectedVm);
    component.ngOnInit();

    expect(component.vm).toEqual(expectedVm);
  });

  // TODO: add ngoninit test.

  describe('ngOnDestroy', (): void => {
    it('should unsubscribe', (): void => {
      (component as any).unsubscribe$ = {
        complete: noop,
        next: noop,
      };
      const completeSpy: SpyInstance = jest.spyOn(component.unsubscribe$, 'complete');
      const nextSpy: SpyInstance = jest.spyOn(component.unsubscribe$, 'next');

      component.ngOnDestroy();

      expect(nextSpy).toHaveBeenCalledWith(undefined);
      expect(completeSpy).toHaveBeenCalled();
    });
  });

  // Add more tests as needed for other component behavior
});
