import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-clientboard',
  templateUrl: './clientboard.component.html',
  styleUrls: ['./clientboard.component.css']
})
export class ClientboardComponent implements OnInit {
  board: string;
  errorMessage: string;
  constructor(private userService: UserService, private clientService: ClientService) { }

  ngOnInit() {
    this.userService.getClientBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
    this.clientService.getClient
  }
}
