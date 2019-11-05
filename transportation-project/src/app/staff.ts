import { Role } from './role.enum';
import { Transportcentre } from './transportcentre';

export class Staff {
    staffId:number;
    staffName:string;
    dateOfJoining:Date;
    baseSalary:number;
    houseRateAllowance:number;
    tuitionAssistance:number;
    incentive:number;
    email:string;
    role:Role;
    tc:Transportcentre;
    staffUsername:string;
    
}
