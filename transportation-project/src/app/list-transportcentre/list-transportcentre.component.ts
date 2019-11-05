import { Component, OnInit } from '@angular/core';
import { TransportcentreService } from '../transportcentre.service';
import { Subject, Observable } from 'rxjs';
import { Transportcentre } from '../transportcentre';
import { FormGroup, FormControl } from '@angular/forms';
import { TokenStorageService } from '../reglog/auth/token-storage.service';

@Component({
  selector: 'app-list-transportcentre',
  templateUrl: './list-transportcentre.component.html',
  styleUrls: ['./list-transportcentre.component.css']
})
export class ListTransportcentreComponent implements OnInit {
  info: any;
  
  constructor(private transportcentreservice: TransportcentreService, private token: TokenStorageService) { }
  transportcentreArray: any[] = [];
  dtOptions: DataTables.Settings ={};
  dtTrigger: Subject<any> = new Subject();
  transportcentres: Observable<Transportcentre[]>;
  transportcentre: Transportcentre = new Transportcentre();
  deleteMessage=false;
  transportcentrelist:any;
  isupdated = false;
  
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.isupdated=false;
    this.dtOptions = {
      pageLength:6,
      stateSave:true,
      lengthMenu:[[6,16,20,-1],[6,16,20,"All"]],
      processing:true
    };
    this.transportcentreservice.getTransportcentreList().subscribe(data =>{
      this.transportcentres = data;
      this.dtTrigger.next();
    })
  }
  deleteTransportcentre(id:number){
    this.transportcentreservice.deleteTransportcentre(id)
    .subscribe( data => {
      console.log(data);
      this.deleteMessage=true;
      this.transportcentreservice.getTransportcentreList().subscribe(data =>{
        this.transportcentres = data
      })
    },
    error => console.log(error));
  }
  updateTransportcentre(id: number){
    this.transportcentreservice.getTransportcentre(id)
      .subscribe(
        data => {
          this.transportcentre=data;
        },
        error =>console.log(error));
  }
transportcentreupdateform=new FormGroup({
  tcId: new FormControl(),
  tcName: new FormControl(),
  tcAddress: new FormControl(),
  tcPhoneNumber: new FormControl(),
  tcEmail: new FormControl(),
  staffSet: new FormControl(),
  consignments: new FormControl()
});
updateTc(updtc){
  this.transportcentre = new Transportcentre();
  this.transportcentre.tcId = this.TransportcentreId.value;
  this.transportcentre.tcName = this.TransportcentreName.value;
  this.transportcentre.tcAddress = this.TransportcentreAddress.value;
  this.transportcentre.tcPhoneNumber = this.TransportcentrePhoneNumber.value;
  this.transportcentre.tcEmail = this.TransportcentreEmail.value;
  this.transportcentreservice.updateTransportcentre(this.transportcentre.tcId,this.transportcentre).subscribe(
    data => {
      this.isupdated=true;
      this.transportcentreservice.getTransportcentreList().subscribe(data =>{
        this.transportcentres = data
      })
    },
    error => console.log(error));
}
// get TransportcentreId(){
//   return this.transportcentreupdateform.get('tcId');
// }
get TransportcentreName(){
  return this.transportcentreupdateform.get('tcName');
}
get TransportcentreAddress(){
  return this.transportcentreupdateform.get('tcAddress');
}
get TransportcentrePhoneNumber(){
  return this.transportcentreupdateform.get('tcPhoneNumber');
}
get TransportcentreEmail(){
  return this.transportcentreupdateform.get('tcEmail');
}
get TransportcentreId(){
  return this.transportcentreupdateform.get('tcId');
}
changeisUpdate(){
  this.isupdated=false;
}
}
