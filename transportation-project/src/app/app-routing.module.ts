import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookConsignmentComponent } from './book-consignment/book-consignment.component';
import { ConsignmentListComponent } from './consignment-list/consignment-list.component';
import { AddTransportcentreComponent } from './add-transportcentre/add-transportcentre.component';
import { ListTransportcentreComponent } from './list-transportcentre/list-transportcentre.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { AddClientComponent } from './add-client/add-client.component';
import { HomeComponent } from './home/home.component';
import { TcboardComponent } from './reglog/tcboard/tcboard.component';
import { AdminComponent } from './reglog/admin/admin.component';
import { LoginComponent } from './reglog/auth/login/login.component';
import { RegisterComponent } from './reglog/auth/register/register.component';
import { ClientAndAccountRegisterComponent } from './client-and-account-register/client-and-account-register.component';
import { ClientboardComponent } from './reglog/clientboard/clientboard.component';
import { EmployeeAndAccountRegisterComponent } from './employee-and-account-register/employee-and-account-register.component';
import { ListClientComponent } from './list-client/list-client.component';
import { PayrollAdminComponent } from './payroll-admin/payroll-admin.component';


const routes: Routes = [
  // {path:'', redirectTo:'view-consignment', pathMatch:"full"},
  {path:'view-consignment',component:ConsignmentListComponent},
  {path:'book-consignment',component:BookConsignmentComponent},
  {path:'add-transportcentre',component:AddTransportcentreComponent},
  {path:'list-transportcentre',component:ListTransportcentreComponent},
  {path:'add-staff',component:AddStaffComponent},
  {path:'list-staff',component:ListStaffComponent},
  {path:'list-client',component:ListClientComponent},
  {path:'add-client',component:AddClientComponent},
  {path:'home',component:HomeComponent},
  {path:'tcboard',component:TcboardComponent},
  {path:'admin',component:AdminComponent},
  {path:'auth/login',component:LoginComponent},
  {path:'auth/signup',component:RegisterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'client-and-account-register',component:ClientAndAccountRegisterComponent},
  {path:'employee-and-account-register',component:EmployeeAndAccountRegisterComponent},
  {path:'clientboard', component:ClientboardComponent},
  {path:'payroll-admin', component:PayrollAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
