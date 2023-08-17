import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildExampleComponent } from './parent-child-example.component';

describe('ParentChildExampleComponent', () => {
  let component: ParentChildExampleComponent;
  let fixture: ComponentFixture<ParentChildExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentChildExampleComponent],
    });
    fixture = TestBed.createComponent(ParentChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
