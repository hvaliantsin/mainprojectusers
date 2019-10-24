import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Staff } from '../staff';
import { FormControl, FormGroup } from '@angular/forms';

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
    staffId:new FormControl(),
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



    this.submitted=true;
    this.save();
  }
  save(){
    this.transportcentreservice.createTransportcentre(this.transportcentre).subscribe(data => console.log(data), error => console.error(error));
    this.transportcentre = new Transportcentre();
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
  addTransportcentreForm(){
    this.submitted=false;
    this.transportcentresaveform.reset();
  }
}
