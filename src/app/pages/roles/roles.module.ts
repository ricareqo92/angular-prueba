import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Importar librerías externas
import {
  NgxNotifierModule,
  NgxNotifierService,
} from 'ngx-notifier';
import {
  NgxSpinnerModule,
  NgxSpinnerService
} from 'ngx-spinner';

import {NgxPaginationModule} from 'ngx-pagination';

//Importar Rutas
import { RolesRoutingModule } from './roles-routing.module';

//Importar Componentes
import { RolesComponent } from './roles.component';
import { RolesCreateComponent } from './roles-create/roles-create.component';
import { RolesEditComponent } from './roles-edit/roles-edit.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RoleFormComponent } from 'src/app/components/role-form/role-form.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    RolesComponent,
    RolesCreateComponent,
    RolesEditComponent,
    RolesListComponent,
    RoleFormComponent,
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
    NgxNotifierModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    SharedModule,
  ],
  providers: [
    NgxNotifierService,
    NgxSpinnerService,
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
})
export class RolesModule { }
