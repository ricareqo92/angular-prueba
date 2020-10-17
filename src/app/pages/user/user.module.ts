import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxNotifierModule,
  NgxNotifierService
} from 'ngx-notifier';

import { UserRoutingModule } from './user-routing.module';

// COMPONENTES
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserComponent } from './user.component';
import { TitleComponent } from 'src/app/components/title/title.component';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';
import { ModalDeleteComponent } from 'src/app/components/modal-delete/modal-delete.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserComponent,
    TitleComponent,
    UserFormComponent,
    ModalDeleteComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    NgxNotifierModule,
  ],
  providers: [
    NgxNotifierService
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],

})
export class UserModule { }
