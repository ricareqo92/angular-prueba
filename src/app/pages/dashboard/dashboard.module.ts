import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserModule } from '../user/user.module';
import { OrganizationModule } from 'src/app/modules/organization/organization.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UserModule,
    OrganizationModule,
  ]
})
export class DashboardModule { }
