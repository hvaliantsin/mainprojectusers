import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../reglog/auth/signup-info';
import { Staff } from '../staff';
import { AuthService } from '../reglog/auth/auth.service';
import { StaffService } from '../staff.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Transportcentre } from '../transportcentre';
import { Role } from '../role.enum';

@Component({
  selector: 'app-employee-and-account-register',
  templateUrl: './employee-and-account-register.component.html',
  styleUrls: ['./employee-and-account-register.component.css']
})
export class EmployeeAndAccountRegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  staff: Staff = new Staff;
  submitted = true;
  temprole: any;
  constructor(private authService:AuthService, private staffservice: StaffService) { }

  ngOnInit() {
    this.submitted=false;
  }

  staffsaveform = new FormGroup({
    staffName:new FormControl(),
    staffUsername: new FormControl(),
    staffPassword: new FormControl(),
    //dateOfJoining:new FormControl(),
    baseSalary:new FormControl(),
    //houseRateAllowance:new FormControl(),
    //tuitionAssistance:new FormControl(),
    //incentive:new FormControl(),
    email:new FormControl(),
    role:new FormControl(),
    tc:new FormControl(),
    //staffUsername: new FormControl()
  });

  saveStaff(saveStaff){
    this.staff = new Staff();
    this.staff.staffUsername = this.StaffUsername.value;
    this.staff.role = this.StaffRole.value;
    if(this.staff.role == Role.MANAGER)
      this.temprole = ['tc'];
      else
      this.temprole = ['user'];
    this.signupInfo = new SignUpInfo(this.StaffName.value, this.staff.staffUsername, this.StaffEmail.value, this.StaffPassword.value,this.temprole);
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
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  get StaffUsername(){
    return this.staffsaveform.get('staffUsername');
  }

  get StaffPassword(){
    return this.staffsaveform.get('staffPassword');
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
