import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AircraftModule } from './aircrafts/aircraft.module';
import { AirportsModule } from './airports/airports.module';
import {GraphQLModule} from "@nestjs/graphql";
import {Aircraft} from "./aircrafts/schema/aircraft.schema";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'kong',
            password: 'kong',
            database: 'kong',
            schema: 'bookings',
            logging: true,
            entities:[Aircraft],
            autoLoadEntities: true
        }),
        GraphQLModule.forRoot({
           debug: true,
           playground: true,
           autoSchemaFile: 'schema.gql'
        }),
        AircraftModule,
        AirportsModule
    ],
})
export class AppModule {
}
