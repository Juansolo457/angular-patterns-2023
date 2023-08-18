import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomUserService } from '../../shared/services/random-user.service';

import { ParentChildExampleComponent } from './parent-child-example.component';
import { ParentChildRoutingModule } from './parent-child-routing.module';

describe('ParentChildExampleComponent', () => {
  let component: ParentChildExampleComponent;
  let fixture: ComponentFixture<ParentChildExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentChildExampleComponent],
      imports: [CommonModule, ParentChildRoutingModule, HttpClientModule],
      providers: [RandomUserService],
    });
    fixture = TestBed.createComponent(ParentChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
