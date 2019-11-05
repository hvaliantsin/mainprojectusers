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
      console.log(this.consignments);
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
    consId:new FormControl(),
    type: new FormControl(),
    consWeight:new FormControl(),
    consDeliveryLoc: new FormControl(),
    consDate:new FormControl(),
    consDeliveryDate:new FormControl(),      //////////
    consDeliveryAddress:new FormControl(),
    consClient: new FormControl(),
    consDeliveryAmount: new FormControl()
});
updateCons(updcons){
  this.consignment = new Consignment();
  this.consignment.consId = this.ConsignmentId.value;
  this.consignment.type = this.ConsignmentType.value;
  this.consignment.consWeight = this.ConsignmentWeight.value;
  this.consignment.consDate = this.ConsignmentDate.value;
  this.consignment.consDeliveryDate = this.ConsignmentDeliveryDate.value;
  this.consignment.consDeliveryAddress = this.ConsignmentDeliveryAddress.value;
  this.consignment.consDeliveryAmount = this.ConsignmentAmount.value;
  console.log(this.ConsignmentType.value);
  this.consignmentservice.updateConsignment(this.consignment.consId,this.consignment).subscribe(
    data => {
      this.isupdated=true;
      this.consignmentservice.getConsignmentList().subscribe(data =>{
        this.consignments = data
      })
    },
    error => console.log(error));
}
get ConsignmentType(){
  return this.consignmentupdateform.get('type');
}
get ConsignmentWeight(){
  return this.consignmentupdateform.get('consWeight');
}
get ConsignmentId(){
  return this.consignmentupdateform.get('consId');
}
get ConsignmentDate(){
  return this.consignmentupdateform.get('consDate');
}
get ConsignmentDeliveryDate(){
  return this.consignmentupdateform.get('consDeliveryDate');
}
get ConsignmentDeliveryAddress(){
  return this.consignmentupdateform.get('consDeliveryAddress')
}
get ConsignmentAmount(){
  return this.consignmentupdateform.get('consDeliveryAmount');
}
changeisUpdate(){
  this.isupdated=false;
}
}
