import {Module} from '@nestjs/common';
import {AirportsService} from './airports.service';
import {AirportsResolver} from './airports.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Airports} from "./schema/airports.schema";

const AirportsServiceProvider = {
    provide: 'AirportsService',
    useClass: AirportsService
}

@Module({
    imports:[TypeOrmModule.forFeature([Airports])],
    providers: [AirportsServiceProvider, AirportsResolver]
})
export class AirportsModule {

}
