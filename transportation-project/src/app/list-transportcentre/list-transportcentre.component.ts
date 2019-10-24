import { Component, OnInit } from '@angular/core';
import { TransportcentreService } from '../transportcentre.service';
import { Subject, Observable } from 'rxjs';
import { Transportcentre } from '../transportcentre';

@Component({
  selector: 'app-list-transportcentre',
  templateUrl: './list-transportcentre.component.html',
  styleUrls: ['./list-transportcentre.component.css']
})
export class ListTransportcentreComponent implements OnInit {

  constructor(private transportcentreservice: TransportcentreService) { }
  transportcentreArray: any[] = [];
  dtOptions: DataTables.Settings ={};
  dtTrigger: Subject<any> = new Subject();
  transportcentres: Observable<Transportcentre[]>;
  transportcentre: Transportcentre = new Transportcentre();
  deleteMessage=false;
  transportcentrelist:any;
  isupdated = false;
  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength:6,
      stateSave:true,
      
    }
  }

}
