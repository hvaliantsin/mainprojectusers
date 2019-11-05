import { Component, OnInit } from '@angular/core';
import { ConsignmentService } from '../consignment.service';
import { Consignment } from '../consignment';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Transportcentre } from '../transportcentre';
import { TransportcentreService } from '../transportcentre.service';
import { Client } from '../client';

@Component({
  selector: 'app-book-consignment',
  templateUrl: './book-consignment.component.html',
  styleUrls: ['./book-consignment.component.css']
})
export class BookConsignmentComponent implements OnInit {

  constructor(private consignmentservice:ConsignmentService) { }
  consignment: Consignment = new Consignment;
  submitted = false;
  ngOnInit() {
    this.submitted=false;
  }
  consignmentsaveform = new FormGroup({
    type: new FormControl(),
    consWeight:new FormControl(),
    consDate:new FormControl(),          //////////
    consDeliveryDate:new FormControl(),
    consDeliveryAddress: new FormControl(),      //////////
    consDeliveryLoc:new FormControl(),
    consClient: new FormControl(),
    consDeliveryAmount:new FormControl()
  });

  saveConsignment(saveConsignment){
    this.consignment = new Consignment();
    this.consignment.type=this.ConsignmentType.value;
    this.consignment.consWeight=this.ConsignmentWeight.value;
    this.consignment.consDate = this.ConsignmentDate.value;
    this.consignment.consDeliveryDate = this.ConsignmentDate.value;
    this.consignment.consDeliveryLoc = new Transportcentre();
    
    this.consignment.consDeliveryLoc.tcId = this.ConsignmentTCId.value;
    this.consignment.consDeliveryAddress = this.ConsignmentDeliveryAddress.value;
    this.consignment.consClient = new Client();
    this.consignment.consClient.clientId = this.ConsignmentClientId.value;
    this.consignment.consDeliveryAmount = this.ConsignmentAmount.value;
    this.submitted=true;

    this.save();
  }
  save(){
    console.log(this.consignment)
    //this.consignmentservice.createConsignment(this.consignment).subscribe(data => console.log(data), error = console.log(error));
    this.consignmentservice.createConsignment(this.consignment).subscribe(data => console.log(data), error => console.log(error))
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
  get ConsignmentDeliveryDate(){
    return this.consignmentsaveform.get('consDeliveryDate');
  }
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
