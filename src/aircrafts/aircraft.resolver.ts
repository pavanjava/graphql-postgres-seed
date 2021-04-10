import {Resolver, Query} from '@nestjs/graphql';
import {Aircraft} from "./schema/aircraft.schema";
import {IAircraft} from "./interfaces/aircraft.interface";
import {Inject} from "@nestjs/common";

@Resolver(of => Aircraft)
export class AircraftResolver {

    constructor(@Inject('AircraftService') private readonly aircraftService: IAircraft) {
    }

    @Query(() => [Aircraft], {nullable: true, name: 'findAllAircraft'})
    async findAllAircraft(): Promise<Aircraft[]> {
        return this.aircraftService.findAllAircraft();
    }
}
