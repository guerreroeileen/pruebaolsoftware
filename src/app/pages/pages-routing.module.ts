import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },

    {
      path: 'layout',
      loadChildren: () => import('./programacion-components/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./gestion-components/forms.module')
        .then(m => m.FormsModule),
    },

    {
      path: 'extra-components',
      loadChildren: () => import('./roles-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },

    {
      path: 'modal-overlays',
      loadChildren: () => import('./perfiles-components/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },

    {
      path: 'gestion-usuarios',
      loadChildren: () => import('./usuarios-components/usuarios-components.module')
        .then(m => m.UsuariosComponentsModule),
    },



  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
