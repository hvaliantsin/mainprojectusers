import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Subject, Observable } from 'rxjs';
import { Staff } from '../staff';
import { FormGroup, FormControl } from '@angular/forms';
import { Transportcentre } from '../transportcentre';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {

  constructor(private staffservice: StaffService) { }
  staffArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  manystaff: Observable<Staff[]>;
  staff: Staff = new Staff();
  deleteMessage=false;
  stafflist:any;
  isupdated = false;
  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength:6,
      stateSave:true,
      lengthMenu:[[6,16,20,-1],[6,16,20,"All"]],
      processing:true
    };
    this.staffservice.getStaffList().subscribe(data =>{ 
      this.manystaff = data;
      this.dtTrigger.next();
    })
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
updateStaff(id: number){
  console.log("updateStaff")
  this.staffservice.getStaff(id).subscribe(data =>{
    this.staff=data
    console.log(this.staff);
  },
  error =>console.log(error));
}
staffupdateform = new FormGroup({
  staffName:new FormControl(),
  baseSalary:new FormControl(),
  incentive:new FormControl(),
  email:new FormControl(),
  role:new FormControl(),
  tc:new FormControl(),
  staffId:new FormControl()
});
updateS(upds){
  console.log("updateS")
 // this.staff = new Staff();

  this.staff.staffName = this.StaffName.value;
  this.staff.baseSalary = this.StaffBaseSalary.value;
  this.staff.incentive = this.StaffIncentive.value;
  this.staff.email = this.StaffEmail.value;
 // this.staff.role = this.StaffRole.value;
  //this.staff.tc = new Transportcentre();
 // this.staff.tc.tcId = this.StaffTCID.value;
  console.log(this.staff);
  this.staffservice.updateStaff(this.staff.staffId,this.staff).subscribe(
    data => {
      this.isupdated=true;
      this.staffservice.getStaffList().subscribe(data =>{
        this.staff = data;
        
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

