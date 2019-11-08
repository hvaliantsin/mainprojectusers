import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Subject, Observable } from 'rxjs';
import { Client } from '../client';
import { error } from 'util';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  constructor(private clientservice: ClientService) { }
  clientArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  clients: Observable<Client[]>;
  client: Client = new Client();
  deleteMessage=false;
  clientlist:any;
  isupdated = false;
  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength:6,
      stateSave:true,
      lengthMenu:[[6,16,20,-1],[6,16,20,"All"]],
      processing:true
    };
    this.clientservice.getClientList().subscribe(data =>{
      this.clients = data;
      this.dtTrigger.next();
    })
  }
  deleteClient(id:number){
  this.clientservice.deleteClient(id).subscribe(data => {
    console.log(data);
    this.deleteMessage=true;
    this.clientservice.getClientList().subscribe(data =>{
      this.clients = data
    })
  },
  error => console.log(error));
  }
updateClient(id:number){
  this.clientservice.getClient(id).subscribe(data =>{
    this.clientlist=data
  },
  error =>console.log(error));
}
clientupdateform = new FormGroup({
  clientName: new FormControl(),
  clientEmail: new FormControl(),
  clientPhoneNumber: new FormControl(),
  clientAddress: new FormControl()
});
updateC(updc){
  this.client = new Client();
  this.client.clientName = this.ClientName.value;
  this.client.clientEmail = this.ClientEmail.value;
  this.client.clientPhoneNumber = this.ClientPhoneNumber.value;
  this.client.clientAddress = this.ClientAddress.value;
  console.log(this.client);
  this.clientservice.updateClient(this.client.clientId,this.client).subscribe(
    data => {
      this.isupdated=true;
      this.clientservice.getClientList().subscribe(data =>{
        this.clients = data
      })
    },
    error => console.log(error));
}
get ClientName(){
  return this.clientupdateform.get('clientName');
}
get ClientEmail(){
  return this.clientupdateform.get('clientEmail');
}
get ClientPhoneNumber(){
  return this.clientupdateform.get('clientPhoneNumber');
}
get ClientAddress(){
  return this.clientupdateform.get('clientAddress');
}
changeisUpdate(){
  this.isupdated=false;
}
}
