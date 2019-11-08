import { Staff } from './staff';
import { Consignment } from './consignment';

export class Transportcentre {
    tcId: number;
    tcName: string;
    tcAddress: string;
    tcPhoneNumber: number;
    tcEmail: string;
    staffSet: Staff[];
    consignments: Consignment[];
}
