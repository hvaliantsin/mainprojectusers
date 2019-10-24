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

@NgModule({
  declarations: [
    AppComponent,
    BookConsignmentComponent,
    ConsignmentListComponent,
    AddTransportcentreComponent,
    ListTransportcentreComponent
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
