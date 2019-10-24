import { Component, OnInit } from '@angular/core';
import { ConsignmentService } from '../consignment.service';
import { Consignment } from '../consignment';
import { FormGroup,FormControl,Validators } from '@angular/forms';

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
    consDeliveryDate:new FormControl(),      //////////
    consDeliveryLoc:new FormControl(),
    consDeliveryAmount:new FormControl()
  });

  saveConsignment(saveConsignment){
    this.consignment = new Consignment();
    this.consignment.type=this.ConsignmentType.value;
    this.consignment.consWeight=this.ConsignmentWeight.value;
    
   
    
    this.submitted=true;
    this.save();
  }
  save(){
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
    return this.consignmentsaveform.get('consDeliveryLoc');
  }
  get ConsignmentAmount(){
    return this.consignmentsaveform.get('consDeliveryAmount');
  }

  addConsignmentForm(){
    this.submitted=false;
    this.consignmentsaveform.reset();
  }
}
