import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { FormGroup, FormControl } from '@angular/forms';
import { Staff } from '../staff';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private clientService:ClientService) { }
  client: Client = new Client;
  submitted = true;
  ngOnInit() {
    this.submitted=false;
  }
  clientsaveform = new FormGroup({
    clientName: new FormControl(),
    clientEmail: new FormControl(),
    clientPhoneNumber: new FormControl(),
    clientAddress: new FormControl()
  });

  saveClient(saveClient){
    this.client = new Client();
    this.client.clientName = this.ClientName.value;
    this.client.clientEmail = this.ClientEmail.value;
    this.client.clientPhoneNumber = this.ClientPhoneNumber.value;
    this.client.clientAddress = this.ClientAddress.value;
    this.submitted=true;
    this.save();
  }
  
  save(){
    this.clientService.createClient(this.client).subscribe(data => console.log(data), error => console.error(error));
    this.client = new Client();
  }

  get ClientName(){
    return this.clientsaveform.get('clientName');
  }

  get ClientEmail(){
    return this.clientsaveform.get('clientEmail');
  }

  get ClientPhoneNumber(){
    return this.clientsaveform.get('clientPhoneNumber');
  }

  get ClientAddress(){
    return this.clientsaveform.get('clientAddress');
  }
  addClientForm(){
    this.submitted = false;
    this.clientsaveform.reset();
  }

}
