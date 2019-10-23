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
    consignment_type: new FormControl(),
    consignment_weight:new FormControl(),
    consignment_date:new FormControl(),          //////////
    consignment_del_date:new FormControl(),      //////////
    consignment_del_address:new FormControl(),
    consignment_amount:new FormControl()
  });

  saveConsignment(saveConsignment){
    this.consignment = new Consignment();
    this.consignment.consignment_type=this.ConsignmentType.value;
    this.consignment.consignment_weight=this.ConsignmentWeight.value;
    this.consignment.consignment_date=this.ConsignmentDate.value;
    this.consignment.consignment_del_date=this.ConsignmentDeliveryDate.value;
    this.consignment.consignment_del_address=this.ConsignmentDeliveryAddress.value;
    this.consignment.consignment_amount=this.ConsignmentAmount.value;
    this.submitted=true;
    this.save();
  }
  save(){
    this.consignmentservice.createConsignment(this.consignment).subscribe(data => console.log(data), error = console.log(error));
    this.consignment = new Consignment();
  }
  get ConsignmentType(){
    return this.consignmentsaveform.get('consignment_type');
  }
  get Consignment

}
