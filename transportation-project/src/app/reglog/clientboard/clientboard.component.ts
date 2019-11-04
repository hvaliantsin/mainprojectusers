import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
<<<<<<< HEAD
import { ClientService } from 'src/app/client.service';
import { Client } from 'src/app/client';
import { TokenStorageService } from '../auth/token-storage.service';
=======
>>>>>>> parent of 743b7746... register client

@Component({
  selector: 'app-clientboard',
  templateUrl: './clientboard.component.html',
  styleUrls: ['./clientboard.component.css']
})
export class ClientboardComponent implements OnInit {
  board: string;
  client: any;
  errorMessage: string;
<<<<<<< HEAD
  info:any;
  constructor(private userService: UserService, private clientService: ClientService, private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    console.log(this.info)
    this.userService.getClientBoard().subscribe(
=======

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTCBoard().subscribe(
>>>>>>> parent of 743b7746... register client
      data => {
        this.board = data;
        console.log(this.board);
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
    
    this.clientService.getClientByUsername('client').subscribe(
      data => {
        this.client = data;
        console.log(data);
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
