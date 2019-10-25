import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookConsignmentComponent } from './book-consignment/book-consignment.component';
import { ConsignmentListComponent } from './consignment-list/consignment-list.component';
import { AddTransportcentreComponent } from './add-transportcentre/add-transportcentre.component';
import { ListTransportcentreComponent } from './list-transportcentre/list-transportcentre.component';
import { AddStaffComponent } from './add-staff/add-staff.component';


const routes: Routes = [
  // {path:'', redirectTo:'view-consignment', pathMatch:"full"},
  {path:'view-consignment',component:ConsignmentListComponent},
  {path:'book-consignment',component:BookConsignmentComponent},
  {path:'add-transportcentre',component:AddTransportcentreComponent},
  {path:'list-transportcentre',component:ListTransportcentreComponent},
  {path:'add-staff',component:AddStaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
