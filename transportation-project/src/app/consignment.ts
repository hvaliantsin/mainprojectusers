import { Transportcentre } from './transportcentre';
import { Client } from './client';

export class Consignment {
    consId:number;
    type:string;
    consWeight:number;
    consDate:string;          //////////
    consDeliveryDate:string;      //////////
    consDeliveryAddress:string;
    consDeliveryAmount:number;
    consDeliveryLoc:Transportcentre;
    consClient:Client;
}
