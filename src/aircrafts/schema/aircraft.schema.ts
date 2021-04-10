import {Field, ObjectType} from "@nestjs/graphql";
import {Column, Entity, PrimaryColumn} from "typeorm";
import {GraphQLJSONObject} from 'graphql-type-json';

@Entity({name:'aircrafts_data', synchronize: false})
@ObjectType()
export class Aircraft {
    @PrimaryColumn({name:'aircraft_code', length: 3, type:'char'})
    @Field({nullable: false,})
    aircraftCode: string;

    @Column({name:'model', type:'jsonb'})
    @Field(() => GraphQLJSONObject, {nullable: false})
    model: object;

    @Column({name:'range', type:'integer'})
    @Field({nullable: false})
    range: number;
}