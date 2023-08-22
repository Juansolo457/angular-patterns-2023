import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ActivityWeightFormRoutingModule } from './activity-weight-form-routing.module';
import { ActivityWeightFormComponent } from './activity-weight-form.component';

@NgModule({
  declarations: [ActivityWeightFormComponent],
  imports: [
    CommonModule,
    ActivityWeightFormRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
})
export class ActivityWeightFormModule {}
