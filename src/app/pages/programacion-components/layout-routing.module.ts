import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'stepper',
      component: StepperComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
