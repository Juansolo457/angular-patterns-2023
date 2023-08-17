import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildExampleComponent } from './parent-child-example.component';

const routes: Routes = [{ component: ParentChildExampleComponent, path: '' }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ParentChildRoutingModule {}
