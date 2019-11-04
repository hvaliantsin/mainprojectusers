import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../reglog/auth/signup-info';
import { AuthService } from '../reglog/auth/auth.service';
import { Client } from '../client';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-and-account-register',
  templateUrl: './client-and-account-register.component.html',
  styleUrls: ['./client-and-account-register.component.css']
})
export class ClientAndAccountRegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  client: Client = new Client;
  submitted = true;
  constructor(private authService:AuthService, private clientService:ClientService) { }

  ngOnInit() {
    this.submitted=false;
  }

  clientsaveform = new FormGroup({
    clientName: new FormControl(),
    clientEmail: new FormControl(),
    clientPhoneNumber: new FormControl(),
    clientAddress: new FormControl(),
    clientUsername: new FormControl(),
    clientPassword: new FormControl(),
  });

  saveClient(saveClient){
    this.client = new Client();
    this.signupInfo = new SignUpInfo(this.ClientName.value, this.ClientUsername.value, this.ClientEmail.value, this.ClientPassword.value,['client']);
    this.client.clientName = this.ClientName.value;
    this.client.clientEmail = this.ClientEmail.value;
    this.client.clientPhoneNumber = this.ClientPhoneNumber.value;
    this.client.clientAddress = this.ClientAddress.value;
    this.client.clientUser = this.signupInfo;
    this.submitted=true;
    this.save();
  }
  
  save(){
    this.clientService.createClient(this.client).subscribe(data => console.log(data), error => console.error(error));
    this.client = new Client();
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  get ClientName(){
    return this.clientsaveform.get('clientName');
  }

  get ClientUsername(){
    return this.clientsaveform.get('clientUsername');
  }

  get ClientPassword(){
    return this.clientsaveform.get('clientPassword');
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

  // onSubmit() {
  //   console.log(this.form);

  //   this.signupInfo = new SignUpInfo(
  //     this.form.name,
  //     this.form.username,
  //     this.form.email,
  //     this.form.password,
  //     this.form.role = ['client']);

  //   this.authService.signUp(this.signupInfo).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSignedUp = true;
  //       this.isSignUpFailed = false;
  //     },
  //     error => {
  //       console.log(error);
  //       this.errorMessage = error.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   );
  // }
}
