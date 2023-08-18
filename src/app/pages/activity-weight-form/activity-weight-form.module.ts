import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityWeightFormRoutingModule } from './activity-weight-form-routing.module';
import { ActivityWeightFormComponent } from './activity-weight-form.component';

@NgModule({
  declarations: [ActivityWeightFormComponent],
  imports: [CommonModule, ActivityWeightFormRoutingModule],
})
export class ActivityWeightFormModule {}
