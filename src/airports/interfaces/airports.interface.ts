import {Airports} from "../schema/airports.schema";

export interface IAirports {
    findAllAirports(): Promise<Airports[]>;
}
