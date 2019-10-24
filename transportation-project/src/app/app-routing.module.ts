import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookConsignmentComponent } from './book-consignment/book-consignment.component';
import { ConsignmentListComponent } from './consignment-list/consignment-list.component';
import { AddTransportcentreComponent } from './add-transportcentre/add-transportcentre.component';


const routes: Routes = [
  {path:'', redirectTo:'view-consignment', pathMatch:"full"},
  {path:'view-consignment',component:ConsignmentListComponent},
  {path:'book-consignment',component:BookConsignmentComponent},
  {path:'add-transportcentre',component:AddTransportcentreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
