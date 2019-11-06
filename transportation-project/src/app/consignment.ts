import { Transportcentre } from './transportcentre';
import { Client } from './client';

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
    //consDeliveryLoc:Transportcentre;
   // consClient:Client;
}
