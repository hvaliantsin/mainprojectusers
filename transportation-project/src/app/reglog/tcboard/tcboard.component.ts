import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ConsignmentService } from 'src/app/consignment.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Staff } from 'src/app/staff';
import { Subject } from 'rxjs';
import { Transportcentre } from 'src/app/transportcentre';
import { StaffService } from 'src/app/staff.service';
import { Consignment } from 'src/app/consignment';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tcboard',
  templateUrl: './tcboard.component.html',
  styleUrls: ['./tcboard.component.css']
})
export class TcboardComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings ={};
  board: string;
  errorMessage: string;
  info: any;
  staff: Staff;
  tc:Transportcentre;
  consignment:Consignment = new Consignment();
  consignments:Consignment[];
  consignmentlist:any;
  isupdated = false;
  constructor(private userService: UserService,private staffservice: StaffService, private consignmentService: ConsignmentService,
    private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info);
    console.log(this.token);
    this.dtOptions = {
      pageLength:6,
      stateSave:true,
      lengthMenu:[[6,16,20,-1],[6,16,20,"All"]],
      processing:true
    };
    this.staffservice.getStaffByUsername(this.info.username).subscribe(data => {
      this.staff=data;
      console.log(this.staff);
      this.tc=this.staff.tc;
      console.log(this.tc);
      this.consignments=this.tc.consignments;
      console.log(this.consignments);
      this.dtTrigger.next();
    });    
    
  }
  updateConsignment(id: number){
    this.consignmentService.getConsignment(id).subscribe(
      data => {
        this.consignment=data;
        console.log(this.consignment)
      },
      error => console.log(error));
  }


  updatestatusform= new FormGroup({
    status:new FormControl(),
    consId:new FormControl()
  });
  updatestatus(updst){
    this.consignment.status = this.ConsignmentStatus.value;
    console.log(this.consignment);
    this.consignmentService.updateConsignment(this.consignment.consId,this.consignment).subscribe(
      data => {
        this.isupdated=true;
        this.consignmentService.getConsignmentList().subscribe(data =>{
          this.consignments = data
        })
      },
      error => console.log(error));
  }
  




  get ConsignmentStatus(){
    return this.updatestatusform.get('status');
  }

changeisUpdate(){
  this.isupdated=false;
}


}
