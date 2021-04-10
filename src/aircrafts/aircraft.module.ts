import {Module} from '@nestjs/common';
import {AircraftService} from './aircraft.service';
import {AircraftResolver} from './aircraft.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Aircraft} from "./schema/aircraft.schema";

const AircraftServiceProvider = {
    provide: 'AircraftService',
    useClass: AircraftService
}

@Module({
    imports: [TypeOrmModule.forFeature([Aircraft])],
    providers: [AircraftServiceProvider, AircraftResolver]
})
export class AircraftModule {
}
