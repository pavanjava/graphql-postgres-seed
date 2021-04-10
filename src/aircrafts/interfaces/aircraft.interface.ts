import {Aircraft} from "../schema/aircraft.schema";

export interface IAircraft {
    findAllAircraft(): Promise<Aircraft[]>;
}
