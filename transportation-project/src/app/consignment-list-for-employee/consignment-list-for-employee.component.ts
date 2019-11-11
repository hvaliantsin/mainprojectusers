import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConsignmentService } from '../consignment.service';
import { Subject, Observable } from 'rxjs';
import { Consignment } from '../consignment';
import { TokenStorageService } from '../reglog/auth/token-storage.service';
import { StaffService } from '../staff.service';
import { Staff } from '../staff';

@Component({
  selector: 'app-consignment-list-for-employee',
  templateUrl: './consignment-list-for-employee.component.html',
  styleUrls: ['./consignment-list-for-employee.component.css']
})
export class ConsignmentListForEmployeeComponent implements OnInit {
  info: any;
  staff: Staff;
  constructor(private consignmentservice: ConsignmentService, private token: TokenStorageService, private staffService: StaffService) { }
    consignmentsArray: any[] = [];
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    consignments: Observable<Consignment[]>;
    consignment: Consignment = new Consignment();
    deleteMessage=false;
    consignmentlist:any;
    isupdated = false;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.isupdated=false;
    this.dtOptions = {
      pageLength:6,
      stateSave:true,
      lengthMenu:[[6,16,20,-1],[6,16,20,"All"]],
      processing:true
    };
    this.staffService.getStaffByUsername(this.info.username).subscribe(data =>{
      this.staff = data;
      console.log(this.staff);
      this.consignmentservice.getConsignmentListByStaffId(this.staff.staffId).subscribe(data =>{
        this.consignments = data;
        console.log(this.consignments);
        this.dtTrigger.next();
      }, error => console.log(error));
    }, error => console.log(error));
    
  }
 
  updateConsignment(id: number){
    this.consignmentservice.getConsignment(id)
      .subscribe(
        data => {
          this.consignment=data
        },
        error => console.log(error));
  }
consignmentupdateform=new FormGroup({
    consDeliveryDate:new FormControl(),      //////////
    status: new FormControl()
});
updateCons(updcons){
  //this.consignment = new Consignment();
  console.log(this.consignment);
  this.consignment.consDeliveryDate = this.ConsignmentDeliveryDate.value;
  this.consignment.status = this.ConsignmentStatus.value;
  if(this.consignment.status == "DELIVERED"){
    this.consignment.staffId == 0;
  }
  console.log(this.consignment);
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
get ConsignmentStatus(){
  return this.consignmentupdateform.get('status');
}
changeisUpdate(){
  this.isupdated=false;
}
}
