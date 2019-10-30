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
import { LoginComponent } from './reglog/login/login.component';
import { RegisterComponent } from './reglog/register/register.component';

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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
