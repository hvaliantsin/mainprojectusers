import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ClientService } from 'src/app/client.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Client } from 'src/app/client';
import { Observable, Subject } from 'rxjs';
import { Consignment } from 'src/app/consignment';
import { ConsignmentService } from 'src/app/consignment.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MailServiceService } from 'src/app/mail-service.service';

@Component({
  selector: 'app-clientboard',
  templateUrl: './clientboard.component.html',
  styleUrls: ['./clientboard.component.css']
})
export class ClientboardComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject();
  board: string;
  errorMessage: string;
  client:Client;
  consignment: Consignment// = new Consignment();
  consignments:Consignment[];
  info: any;
  isupdated = false;
  clientlist:any;
  constructor(private consignmentService: ConsignmentService, private clientservice: ClientService,
    private mailservice: MailServiceService, private token: TokenStorageService) { }
  
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info);
    console.log(this.token);
    
    
    this.clientservice.getClientByUsername(this.info.username).subscribe(data => {
      this.client=data;
      console.log(this.client);
      this.consignments=this.client.consignments;
      console.log(this.consignments)
      this.dtTrigger.next();
    });
    //window.sessionStorage.removeItem(CLIENT_ID);
   // const CLIENT_ID = "ClientId";
   // window.sessionStorage.setItem(CLIENT_ID, this.client.clientId.toString());
    
  }
  // getconsignment(id: number){
  //   console.log(this.token);
  //   console.log(this.token.getToken());
  //   console.log(this.client);
  //   this.consignmentService.getConsignmentListByClientId(this.client.clientId).subscribe( data => {
  //     this.consignments=data;
  //   });
  // }

  updateClient(id:number){
    this.clientservice.getClient(this.client.clientId).subscribe(data =>{
      this.clientlist=data
    },
    error =>console.log(error));
  }
  clientupdateform = new FormGroup({
    clientId: new FormControl(),
    clientName: new FormControl(),
    clientEmail: new FormControl(),
    clientPhoneNumber: new FormControl(),
    clientAddress: new FormControl()
  });
  updateC(updc){
    //this.client = new Client();
    this.client.clientName = this.ClientName.value;
    this.client.clientEmail = this.ClientEmail.value;
    this.client.clientPhoneNumber = this.ClientPhoneNumber.value;
    this.client.clientAddress = this.ClientAddress.value;
    this.clientservice.updateClient(this.client.clientId,this.client).subscribe(
      data => {
        this.isupdated=true;
        this.clientservice.getClientByUsername(this.info.username).subscribe(data =>{
          this.client = data
          console.log(this.clientservice)
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

  handleClick(){
    console.log("mail sended")
    this.mailservice.postComplain(this.client).subscribe(data => {
      console.log(data)
    }, error => console.log(error()));
  }
}
