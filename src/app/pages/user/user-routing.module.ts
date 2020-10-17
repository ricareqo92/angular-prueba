import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserComponent } from './user.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: '',
      redirectTo: 'create',
      pathMatch: 'full'
    },
    {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: 'edit/:id',
    component: UserEditComponent
  },
  {
    path: 'list',
    component: UserListComponent
  }]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
