import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxNotifierModule,
  NgxNotifierService
} from 'ngx-notifier';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

import {NgxPaginationModule} from 'ngx-pagination';

import { UserRoutingModule } from './user-routing.module';

// COMPONENTES
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserComponent } from './user.component';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';

//PIPES
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    NgxNotifierModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    SharedModule,
    PipesModule,
  ],
  providers: [
    NgxNotifierService,
    NgxSpinnerService,
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],

})
export class UserModule { }
