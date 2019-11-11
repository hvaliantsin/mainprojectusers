import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Subject, Observable } from 'rxjs';
import { Staff } from '../staff';
import { FormGroup, FormControl } from '@angular/forms';
import { Transportcentre } from '../transportcentre';
import { TokenStorageService } from '../reglog/auth/token-storage.service';
import { Consignment } from '../consignment';
import { ConsignmentService } from '../consignment.service';

@Component({
  selector: 'app-list-staff-for-tc',
  templateUrl: './list-staff-for-tc.component.html',
  styleUrls: ['./list-staff-for-tc.component.css']
})
export class ListStaffForTcComponent implements OnInit {

  constructor(private staffservice: StaffService, private token: TokenStorageService, private consignmentservice: ConsignmentService ) { }
  info: any;
  tc: Transportcentre;
  staffuser: Staff;
  staffArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  manystaff: Observable<Staff[]>;
  staff: Staff = new Staff();
  newstaff:any;
  deleteMessage=false;
  stafflist:any;
  consignment:Consignment;
  isupdated = false;
  consignments: Consignment[];
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.staffservice.getStaffByUsername(this.info.username).subscribe(data => {
      this.staff=data;
      console.log(data)
      console.log(this.staff);
      this.tc=this.staff.tc;
      console.log(this.tc);
      this.consignments=this.staff.tc.consignments;
      console.log(this.consignments);
      this.staffservice.getStaffListByTcId(this.tc.tcId).subscribe(data =>{ 
        this.manystaff = data;
        this.dtTrigger.next();
      });
    });    

    
    
    
    this.isupdated = false;
    this.dtOptions = {
      pageLength:6,
      stateSave:true,
      lengthMenu:[[6,16,20,-1],[6,16,20,"All"]],
      processing:true
    };
  }
deleteStaff(id:number){
  this.staffservice.deleteStaff(id).subscribe(data => {
    console.log(data);
    this.deleteMessage=true;
    this.staffservice.getStaffList().subscribe(data =>{
      this.manystaff = data
    })
  },
  error => console.log(error));
}

assignToStaff(id: number){
  this.staffservice.getStaff(id).subscribe(data =>{
    this.newstaff=data;
  }, error =>console.log(error));
}
assign(id:number){
  this.consignmentservice.getConsignment(id).subscribe(data =>{
    this.consignment=data;
    console.log(this.newstaff);
    this.consignment.staffId =this.newstaff.staffId;
    this.consignment.status="ASSIGNED_TO_DELIVERER";
    console.log(this.consignment)
    this.consignmentservice.updateConsignment(this.consignment.consId,this.consignment).subscribe(data => {
      this.isupdated=true;
      this.staffservice.getStaffByUsername(this.info.username).subscribe(data =>{
        this.staff=data;
        this.consignments=this.staff.tc.consignments;
        })
      },
    error => console.log(error));
  }, error =>console.log(error));
}
updateStaff(id: number){
  console.log("updateStaff")
  this.staffservice.getStaff(id).subscribe(data =>{
    this.stafflist=data
  },
  error =>console.log(error));
}
staffupdateform = new FormGroup({
  staffName:new FormControl(),
  baseSalary:new FormControl(),
  incentive:new FormControl(),
  tc:new FormControl(),
  staffId:new FormControl()
});
updateS(upds){
  console.log("updateS")
  //this.staff = new Staff();

  this.staff.staffName = this.StaffName.value;
  this.staff.baseSalary = this.StaffBaseSalary.value;
  this.staff.incentive = this.StaffIncentive.value;
  this.staff.email = this.StaffEmail.value;
  this.staff.role = this.StaffRole.value;
  this.staff.tc = new Transportcentre();
  this.staff.tc.tcId = this.StaffTCID.value;
  this.staffservice.updateStaff(this.staff.staffId,this.staff).subscribe(
    data => {
      this.isupdated=true;
      this.staffservice.getStaffList().subscribe(data =>{
        this.manystaff = data
        })
      },
    error => console.log(error));
  }
  get StaffName(){
    return this.staffupdateform.get('staffName');
  }
  get StaffBaseSalary(){
    return this.staffupdateform.get('baseSalary');
  }
  get StaffIncentive(){
    return this.staffupdateform.get('incentive');
  }
  get StaffEmail(){
    return this.staffupdateform.get('email');
  }
  get StaffRole(){
    return this.staffupdateform.get('role');
  }
  get StaffTCID(){
    return this.staffupdateform.get('tc')
  }
  changeisUpdate(){
    this.isupdated=false;
  }

}
