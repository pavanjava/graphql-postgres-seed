import { Injectable } from '@nestjs/common';
import {IAirports} from "./interfaces/airports.interface";
import {Airports} from "./schema/airports.schema";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class AirportsService implements IAirports{

    constructor(@InjectRepository(Airports) private readonly airportsRepository: Repository<Airports>) {
    }
    findAllAirports = async (): Promise<Airports[]> => {
        return await this.airportsRepository.find();
    }

}
