import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Consignment } from 'src/app/consignment';
import { Staff } from 'src/app/staff';
import { TokenStorageService } from '../auth/token-storage.service';
import { StaffService } from 'src/app/staff.service';
import { ConsignmentService } from 'src/app/consignment.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employeeboard',
  templateUrl: './employeeboard.component.html',
  styleUrls: ['./employeeboard.component.css']
})
export class EmployeeboardComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject();
  board: string;
  errorMessage: string;
  staff: Staff;
  stafflist:any;
  consignments:Consignment[];
  info: any;
  isupdated = false;

  constructor(private token:TokenStorageService, private staffService: StaffService, private consignmentService: ConsignmentService) { }
  
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info);
    console.log(this.token);
    
    this.staffService.getStaffByUsername(this.info.username).subscribe(data =>{
      this.staff = data;
      console.log(this.staff);
      this.consignmentService.getConsignmentListByStaffId(this.staff.staffId).subscribe(data =>{
        this.consignments = data;
        console.log(this.consignments);
        this.dtTrigger.next();
      }, error => console.log(error));
    }, error => console.log(error));
  }
  updateStaff(id:number){
    this.staffService.getStaff(id).subscribe(
     data=>{ this.stafflist = data; }, error=>console.log(error))
  }
  staffupdateform = new FormGroup({
    staffName:new FormControl(),
    staffEmail:new FormControl(),
  });

  updateS(upds){
    console.log("updateS")
    
  
    this.staff.staffName = this.StaffName.value;
    this.staff.email = this.StaffEmail.value;
    console.log(this.staff);
    this.staffService.updateStaff(this.staff.staffId,this.staff).subscribe(
      data => {
        this.isupdated=true;
        this.staffService.getStaffByUsername(this.info.username).subscribe(data =>{
          this.staff = data
          }, error => console.log(error))
        },
      error => console.log(error));
    }

    get StaffName(){
      return this.staffupdateform.get('staffName');
    }
    get StaffEmail(){
      return this.staffupdateform.get('staffEmail');
    }
    changeisUpdate(){
      this.isupdated=false;
    }
  
}
