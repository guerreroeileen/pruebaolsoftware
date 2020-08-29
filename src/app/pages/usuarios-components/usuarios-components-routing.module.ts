import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosComponentsComponent} from './usuarios-components.component'
import { NewUsuarioComponent } from './new-usuario/new-usuario.component'

const routes: Routes = [{
  path: '',
  component: UsuariosComponentsComponent,
  children: [
    {
      path: 'new',
      component: NewUsuarioComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosComponentsRoutingModule {
}