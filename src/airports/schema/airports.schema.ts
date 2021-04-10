import {Field, ObjectType} from "@nestjs/graphql";
import {Column, Entity, PrimaryColumn} from "typeorm";
import {GraphQLJSONObject} from 'graphql-type-json';

@Entity({name:'airports_data', synchronize: false})
@ObjectType()
export class Airports {

    @PrimaryColumn({name:'airport_code', type:'char', length:3})
    @Field({nullable: false})
    airportCode: string;

    @Column({name:'airport_name', type:'jsonb'})
    @Field(()=>GraphQLJSONObject,{nullable: false})
    airportName: object;

    @Column({name:'city', type:'jsonb'})
    @Field(()=>GraphQLJSONObject,{nullable: false})
    city: object;

    @Column({name:'coordinates', type:'point'})
    @Field(()=>GraphQLJSONObject,{nullable: false})
    coordinates: object;

    @Column({name:'timezone', type:'text'})
    @Field({nullable: false})
    timeZone: string;
}