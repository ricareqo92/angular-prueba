import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesCreateComponent } from './roles-create/roles-create.component';
import { RolesEditComponent } from './roles-edit/roles-edit.component';


const routes: Routes = [{
  path: '',
  component: RolesComponent,
  children: [
    {
      path: '',
      redirectTo: 'lista',
    },
    {
      path: 'lista',
      component: RolesListComponent,
    },
    {
      path: 'crear',
      component: RolesCreateComponent,
    },
    {
      path: 'editar/:id',
      component: RolesEditComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
