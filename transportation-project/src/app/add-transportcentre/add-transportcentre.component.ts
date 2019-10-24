import { Component, OnInit } from '@angular/core';
import { TransportcentreService } from '../transportcentre.service';
import { Consignment } from '../consignment';
import { Transportcentre } from '../transportcentre';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-transportcentre',
  templateUrl: './add-transportcentre.component.html',
  styleUrls: ['./add-transportcentre.component.css']
})
export class AddTransportcentreComponent implements OnInit {

  constructor(private transportcentreservice:TransportcentreService) { }
  transportcentre: Transportcentre = new Transportcentre;
  submitted = true;
  ngOnInit() {
    this.submitted=false;
  }
  transportcentresaveform = new FormGroup({
    tcName: new FormControl(),
    tcAddress: new FormControl(),
    tcPhoneNumber: new FormControl(),
    tcEmail: new FormControl(),
  });

  saveTransportcentre(saveTransportcentre){
    this.transportcentre = new Transportcentre();
    this.transportcentre.tcName = this.TransportcentreName.value;
    this.transportcentre.tcAddress = this.TransportcentreAddress.value;
    this.transportcentre.tcPhoneNumber = this.TransportcentrePhoneNumber.value;
    this.transportcentre.tcEmail = this.TransportcentreEmail.value


    this.submitted=true;
    this.save();
  }
  save(){
    this.transportcentreservice.createTransportcentre(this.transportcentre).subscribe(data => console.log(data), error => console.error(error));
    this.transportcentre = new Transportcentre();
  }
  get TransportcentreName(){
    return this.transportcentresaveform.get('tcName');
  }
  get TransportcentreAddress(){
    return this.transportcentresaveform.get('tcAddress');
  }
  get TransportcentrePhoneNumber(){
    return this.transportcentresaveform.get('tcPhoneNumber');
  }
  get TransportcentreEmail(){
    return this.transportcentresaveform.get('tcEmail')
  }
  addTransportcentreForm(){
    this.submitted=false;
    this.transportcentresaveform.reset();
  }
}
