import { Component, OnInit } from '@angular/core';
import { Transportcentre } from '../transportcentre';
import { Consignment } from '../consignment';
import { ConsignmentService } from '../consignment.service';
import { TransportcentreService } from '../transportcentre.service';
import { UserService } from '../reglog/services/user.service';
import { StaffService } from '../staff.service';
import { TokenStorageService } from '../reglog/auth/token-storage.service';
import { Staff } from '../staff';
import { FormGroup, FormControl } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-book-consignment-for-tc',
  templateUrl: './book-consignment-for-tc.component.html',
  styleUrls: ['./book-consignment-for-tc.component.css']
})
export class BookConsignmentForTcComponent implements OnInit {
  info: any;
  tc: Transportcentre;
  staff: Staff;
  consignment: Consignment = new Consignment();
  constructor(private userService: UserService,private staffservice: StaffService, private consignmentService: ConsignmentService,
    private token: TokenStorageService) { }
  
  submitted = false;
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.staffservice.getStaffByUsername(this.info.username).subscribe(data => {
      this.staff=data;
      console.log(this.staff);
      this.tc=this.staff.tc;
      console.log(this.tc);
    });    
    this.submitted=false;
  }
  consignmentsaveform = new FormGroup({
    type: new FormControl(),
    consWeight:new FormControl(),
    consDate:new FormControl(),          //////////
   // consDeliveryDate:new FormControl(),
    consDeliveryAddress: new FormControl(),      //////////
   // consDeliveryLoc:new FormControl(),
    consClient: new FormControl(),
    consDeliveryAmount:new FormControl()
  });

  saveConsignment(saveConsignment){
    this.consignment = new Consignment();
    this.consignment.type=this.ConsignmentType.value;
    this.consignment.consWeight=this.ConsignmentWeight.value;
    this.consignment.consDate = this.ConsignmentDate.value;
   // this.consignment.consDeliveryDate = this.ConsignmentDate.value;
  console.log(this.tc.tcId)
    this.consignment.tc = new Transportcentre();
    this.consignment.tc.tcId = this.tc.tcId;
    this.consignment.consDeliveryAddress = this.ConsignmentDeliveryAddress.value;
    this.consignment.client = new Client();
    this.consignment.client.clientId = this.ConsignmentClientId.value;
    this.consignment.consDeliveryAmount = this.ConsignmentAmount.value;
    this.consignment.status = "CREATED";
    this.submitted=true;

    this.save();
  }
  save(){
    console.log(this.consignment)
    //this.consignmentservice.createConsignment(this.consignment).subscribe(data => console.log(data), error = console.log(error));
    this.consignmentService.createConsignment(this.consignment).subscribe(data => console.log(data), error => console.log(error))
    this.consignment = new Consignment();
  }
  get ConsignmentType(){
    return this.consignmentsaveform.get('type');
  }
  get ConsignmentWeight(){
    return this.consignmentsaveform.get('consWeight');
  }
  get ConsignmentDate(){
    return this.consignmentsaveform.get('consDate');
  }
  // get ConsignmentDeliveryDate(){
  //   return this.consignmentsaveform.get('consDeliveryDate');
  // }
  get ConsignmentDeliveryAddress(){
    return this.consignmentsaveform.get('consDeliveryAddress');
  }
  get ConsignmentAmount(){
    return this.consignmentsaveform.get('consDeliveryAmount');
  }
  get ConsignmentTCId(){
    return this.consignmentsaveform.get('consDeliveryLoc');
  }
  get ConsignmentClientId(){
    return this.consignmentsaveform.get('consClient');
  }

  addConsignmentForm(){
    this.submitted=false;
    this.consignmentsaveform.reset();
  }
}
