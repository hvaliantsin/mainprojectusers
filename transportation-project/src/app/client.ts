import { Consignment } from './consignment';
import { SignUpInfo } from './reglog/auth/signup-info';

export class Client {
    clientId:number;
    clientName:string;
    clientEmail:string;
    clientPhoneNumber:string;
    clientAddress:string;
    clientUser:SignUpInfo;
}
