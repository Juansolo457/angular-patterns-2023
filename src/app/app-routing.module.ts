import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // eslint-disable-next-line @typescript-eslint/typedef
    loadChildren: () => import('./pages/customers-routing-example/customers.module').then((m) => m.CustomersModule),
    path: 'customers',
  },
  {
    // eslint-disable-next-line @typescript-eslint/typedef
    loadChildren: () => import('./pages/example-component/example.module').then((m) => m.ExamplesModule),
    path: 'examples',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
