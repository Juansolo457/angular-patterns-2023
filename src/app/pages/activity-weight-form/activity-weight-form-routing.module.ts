import { ActivityWeightFormComponent } from './activity-weight-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ component: ActivityWeightFormComponent, path: '' }];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ActivityWeightFormRoutingModule {}
