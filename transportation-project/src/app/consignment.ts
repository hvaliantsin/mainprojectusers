import { Transportcentre } from './transportcentre';
import { Client } from './client';
import { Staff } from './staff';

export class Consignment {
    consId:number;
    type:string;
    consWeight:number;
    tc:Transportcentre;
    consDate:string;          //////////
    consDeliveryDate:string;      //////////
    consDeliveryAddress:string;
    client:Client;
    consDeliveryAmount:number;
    status:string;
    staff:Staff;
    //consDeliveryLoc:Transportcentre;
   // consClient:Client;
}
