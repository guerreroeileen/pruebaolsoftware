import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
} from '@nebular/theme';

// modules
import { ThemeModule } from '../../@theme/theme.module';
import { ModalOverlaysRoutingModule } from './modal-overlays-routing.module';

// components
import { ModalOverlaysComponent } from './modal-overlays.component';
import { DialogComponent } from './dialog/dialog.component';
import { ShowcaseDialogComponent } from './dialog/showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from './dialog/dialog-name-prompt/dialog-name-prompt.component';
import { PopoversComponent } from './popovers/popovers.component';
import {
  NgxPopoverCardComponent, NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
} from './popovers/popover-examples.component';


const COMPONENTS = [
  ModalOverlaysComponent,
  DialogComponent,
  ShowcaseDialogComponent,
  DialogNamePromptComponent,
  PopoversComponent,
  NgxPopoverCardComponent,
  NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
];

const ENTRY_COMPONENTS = [
  ShowcaseDialogComponent,
  DialogNamePromptComponent,
  NgxPopoverCardComponent,
  NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
];

const MODULES = [
  FormsModule,
  ThemeModule,
  ModalOverlaysRoutingModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbPopoverModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbTooltipModule,
];

const SERVICES = [
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class ModalOverlaysModule {
}
