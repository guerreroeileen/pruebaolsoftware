import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { NewUsuarioComponent } from './new-usuario/new-usuario.component';
import { UsuariosComponentsRoutingModule } from './usuarios-components-routing.module'
import { NgxPaginationModule } from 'ngx-pagination';
import { UsuariosComponentsComponent } from './usuarios-components.component'

@NgModule({
  declarations: [NewUsuarioComponent, UsuariosComponentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosComponentsRoutingModule,
    NgxPaginationModule,
  ]
})
export class UsuariosComponentsModule { }
