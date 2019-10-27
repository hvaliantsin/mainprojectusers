import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Staff } from '../staff';
import { FormControl, FormGroup } from '@angular/forms';
import { Transportcentre } from '../transportcentre';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  constructor(private staffservice:StaffService) { }
  staff: Staff = new Staff;
  submitted = true;
  ngOnInit() {
    this.submitted=false;
  }
  staffsaveform = new FormGroup({
    staffName:new FormControl(),
    //dateOfJoining:new FormControl(),
    baseSalary:new FormControl(),
    //houseRateAllowance:new FormControl(),
    //tuitionAssistance:new FormControl(),
    //incentive:new FormControl(),
    email:new FormControl(),
    role:new FormControl(),
    tc:new FormControl()
  });

  saveStaff(saveStaff){
    this.staff = new Staff();
    this.staff.staffName = this.StaffName.value;
    this.staff.baseSalary = this.StaffBaseSalary.value;
    this.staff.email = this.StaffEmail.value;
    this.staff.role = this.StaffRole.value;
    this.staff.tc = new Transportcentre();
    this.staff.tc.tcId = this.StaffTCID.value;
    this.submitted=true;
    this.save();
  }
  save(){
    this.staffservice.createStaff(this.staff).subscribe(data => console.log(data), error => console.error(error));
    this.staff = new Staff();
  }
  get StaffName(){
    return this.staffsaveform.get('staffName');
  }
  get StaffBaseSalary(){
    return this.staffsaveform.get('baseSalary');
  }
  get StaffEmail(){
    return this.staffsaveform.get('email');
  }
  get StaffRole(){
    return this.staffsaveform.get('role');
  }
  get StaffTCID(){
    return this.staffsaveform.get('tc');
  }
  addStaffForm(){
    this.submitted=false;
    this.staffsaveform.reset();
  }
}
