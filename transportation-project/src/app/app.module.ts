import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookConsignmentComponent } from './book-consignment/book-consignment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ConsignmentListComponent } from './consignment-list/consignment-list.component';
import { AddTransportcentreComponent } from './add-transportcentre/add-transportcentre.component';
import { ListTransportcentreComponent } from './list-transportcentre/list-transportcentre.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AdminComponent } from './reglog/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './reglog/auth/login/login.component';
import { RegisterComponent } from './reglog/auth/register/register.component';
import { TcboardComponent } from './reglog/tcboard/tcboard.component';
import { ClientboardComponent } from './reglog/clientboard/clientboard.component';
import { EmployeeboardComponent } from './reglog/employeeboard/employeeboard.component';
import { httpInterceptorProviders } from './reglog/auth/auth-interceptor';
import { ClientAndAccountRegisterComponent } from './client-and-account-register/client-and-account-register.component';
import { EmployeeAndAccountRegisterComponent } from './employee-and-account-register/employee-and-account-register.component';
import { PayrollAdminComponent } from './payroll-admin/payroll-admin.component';
import { BookConsignmentForTcComponent } from './book-consignment-for-tc/book-consignment-for-tc.component';
import { ListStaffForTcComponent } from './list-staff-for-tc/list-staff-for-tc.component';

@NgModule({
  declarations: [
    AppComponent,
    BookConsignmentComponent,
    ConsignmentListComponent,
    AddTransportcentreComponent,
    ListTransportcentreComponent,
    AddStaffComponent,
    ListStaffComponent,
    AddClientComponent,
    ListClientComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TcboardComponent,
    ClientboardComponent,
    EmployeeboardComponent,
    ClientAndAccountRegisterComponent,
    EmployeeAndAccountRegisterComponent,
    PayrollAdminComponent,
    BookConsignmentForTcComponent,
    ListStaffForTcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
