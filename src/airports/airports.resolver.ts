import {Query, Resolver} from '@nestjs/graphql';
import {Inject} from "@nestjs/common";
import {IAirports} from "./interfaces/airports.interface";
import {Airports} from "./schema/airports.schema";

@Resolver()
export class AirportsResolver {
    constructor(@Inject('AirportsService') private readonly airportsService: IAirports) {
    }

    @Query(() => [Airports], {nullable: true, name: 'findAllAirports'})
    findAllAirports(): Promise<Airports[]> {
        return this.airportsService.findAllAirports();
    }
}
