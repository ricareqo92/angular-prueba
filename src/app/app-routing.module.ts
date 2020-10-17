import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [{
    path: 'login', component: LoginComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'user',
      loadChildren: './pages/user/user.module#UserModule',
    }]
  },
  {  path: '**', redirectTo: 'user' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
