import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ClientService } from 'src/app/client.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Client } from 'src/app/client';

@Component({
  selector: 'app-clientboard',
  templateUrl: './clientboard.component.html',
  styleUrls: ['./clientboard.component.css']
})
export class ClientboardComponent implements OnInit {
  board: string;
  errorMessage: string;
  client:any;
  info: any;
  constructor(private userService: UserService, private clientService: ClientService, private token: TokenStorageService) { }
  
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info);
    this.userService.getClientBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );

    this.clientService.getClientByUsername(this.info.username).subscribe(data => {
      this.client=data;
    });
    console.log(this.client);
  }
}
