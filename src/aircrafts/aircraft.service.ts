import { Injectable } from '@nestjs/common';
import {IAircraft} from "./interfaces/aircraft.interface";
import {Aircraft} from "./schema/aircraft.schema";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class AircraftService implements IAircraft{

    constructor(@InjectRepository(Aircraft) private readonly aircraftRepository: Repository<Aircraft>) {}

     findAllAircraft = async(): Promise<Aircraft[]> => {
        return await this.aircraftRepository.find();
    }

}
