import { Component, OnInit } from '@angular/core';
import { ConsignmentService } from '../consignment.service';
import { Consignment } from '../consignment';
import { Observable, Subject, from } from 'rxjs';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { error } from 'util';


@Component({
  selector: 'app-consignment-list',
  templateUrl: './consignment-list.component.html',
  styleUrls: ['./consignment-list.component.css']
})
export class ConsignmentListComponent implements OnInit {

  constructor(private consignmentservice: ConsignmentService) { }
    consignmentsArray: any[] = [];
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    consignments: Observable<Consignment[]>;
    consignment: Consignment = new Consignment();
    deleteMessage=false;
    consignmentlist:any;
    isupdated = false;
  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength:6,
      stateSave:true,
      lengthMenu:[[6,16,20,-1],[6,16,20,"All"]],
      processing:true
    };
    this.consignmentservice.getConsignmentList().subscribe(data =>{
      this.consignments = data;
      this.dtTrigger.next();
    })
  }
  deleteConsignment(id: number){
    this.consignmentservice.deleteConsignment(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.consignmentservice.getConsignmentList().subscribe(data =>{
            this.consignments = data
          })
        },
        error => console.log(error));
  }
  updateConsignment(id: number){
    this.consignmentservice.getConsignment(id)
      .subscribe(
        data => {
          this.consignmentlist=data
        },
        error => console.log(error));
  }
consignmentupdateform=new FormGroup({
    consignment_id:new FormControl(),
    consignment_type: new FormControl(),
    consignment_weight:new FormControl(),
    consignment_date:new FormControl(),
    consignment_del_date:new FormControl(),      //////////
    consignment_del_address:new FormControl(),
    consignment_amount: new FormControl()
});
updateCons(updcons){
  this.consignment = new Consignment();
  this.consignment.consignment_id = this.ConsignmentId.value;
  this.consignment.consignment_type = this.ConsignmentType.value;
  this.consignment.consignment_weight = this.ConsignmentWeight.value;
  this.consignment.consignment_date = this.ConsignmentDate.value;
  this.consignment.consignment_del_date = this.ConsignmentDeliveryDate.value;
  this.consignment.consignment_amount = this.ConsignmentAmount.value;
  console.log(this.ConsignmentType.value);
  this.consignmentservice.updateConsignment(this.consignment.consignment_id,this.consignment).subscribe(
    data => {
      this.isupdated=true;
      this.consignmentservice.getConsignmentList().subscribe(data =>{
        this.consignments = data
      })
    },
    error => console.log(error));
}
get ConsignmentType(){
  return this.consignmentupdateform.get('consignment_type');
}
get ConsignmentWeight(){
  return this.consignmentupdateform.get('consignment_weight');
}
get ConsignmentId(){
  return this.consignmentupdateform.get('consignment_id');
}
get ConsignmentDate(){
  return this.consignmentupdateform.get('consignment_date');
}
get ConsignmentDeliveryDate(){
  return this.consignmentupdateform.get('consignment_del_date');
}
get ConsignmentAmount(){
  return this.consignmentupdateform.get('consignment_amount');
}
changeisUpdate(){
  this.isupdated=false;
}
}
