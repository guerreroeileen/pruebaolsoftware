import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponentsComponent} from './usuarios-components.component'

const routes: Routes = [{
  path: '',
  component: UsuariosComponentsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosComponentsRoutingModule {
}