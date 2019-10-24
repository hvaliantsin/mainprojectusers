import { Consignment } from './consignment';

export class Client {
    clientId:number;
    clientName:string;
    clientEmail:string;
    clientPhoneNumber:string;
    clientAddress:string;
    consignment:Set<Consignment>;
}
