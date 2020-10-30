import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule),
      },
      {
        path: 'roles',
        loadChildren: () => import('../roles/roles.module').then(m => m.RolesModule),
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
