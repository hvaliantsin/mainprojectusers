import { Transportcentre } from './transportcentre';
import { Client } from './client';

export class Consignment {
    consId:number;
    type:string;
    consWeight:number;
    consDeliveryLoc:Transportcentre;
    consDate:string;          //////////
    consDeliveryDate:string;      //////////
    consDeliveryAddress:string;
    consClient:Client;
    consDeliveryAmount:number;
    //consDeliveryLoc:Transportcentre;
   // consClient:Client;
}
