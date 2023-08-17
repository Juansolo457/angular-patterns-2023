import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentChildExampleComponent } from './parent-child-example.component';
import { ParentChildRoutingModule } from './parent-child-routing.module';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [ParentChildExampleComponent, ChildComponentComponent],
  imports: [CommonModule, ParentChildRoutingModule],
})
export class ParentChildExampleModule {}
