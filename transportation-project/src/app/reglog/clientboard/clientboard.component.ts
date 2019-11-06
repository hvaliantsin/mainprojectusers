import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ClientService } from 'src/app/client.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Client } from 'src/app/client';
import { Observable } from 'rxjs';
import { Consignment } from 'src/app/consignment';
import { ConsignmentService } from 'src/app/consignment.service';

@Component({
  selector: 'app-clientboard',
  templateUrl: './clientboard.component.html',
  styleUrls: ['./clientboard.component.css']
})
export class ClientboardComponent implements OnInit {
  board: string;
  errorMessage: string;
  client:Client;
  consignment: Consignment// = new Consignment();
  consignments:Consignment[];
  info: any;
  constructor(private consignmentService: ConsignmentService, private clientService: ClientService, private token: TokenStorageService) { }
  
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info);
    console.log(this.token)
    
    
    this.clientService.getClientByUsername(this.info.username).subscribe(data => {
      this.client=data;
      this.consignments=this.client.consignments;
    });
    //window.sessionStorage.removeItem(CLIENT_ID);
    const CLIENT_ID = "ClientId";
    window.sessionStorage.setItem(CLIENT_ID, this.client.clientId.toString());
    console.log(this.client);
    console.log(this.client.consignments);
  }
  getconsignment(id: number){
    console.log(this.token);
    console.log(this.token.getToken());
    console.log(this.client);
    this.consignmentService.getConsignmentListByClientId(9).subscribe( data => {
      this.consignments=data;
    });
  }
}
