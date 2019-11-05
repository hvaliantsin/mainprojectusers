import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { StaffService } from '../staff.service';
import { Staff } from '../staff';

@Component({
  selector: 'app-payroll-admin',
  templateUrl: './payroll-admin.component.html',
  styleUrls: ['./payroll-admin.component.css']
})
export class PayrollAdminComponent implements OnInit {
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
}
