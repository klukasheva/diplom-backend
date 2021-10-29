import { Type } from "class-transformer";
import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsNotEmptyObject,
    IsNumber,
    IsOptional,
    Max,
    Min,
    ValidateNested
} from "class-validator";

export class ProductDto{
    readonly id:number
    image:string
    title: string
    @IsNumber()
    cost: number
    @IsNumber()
    stockCost: number
    @IsOptional()
    description: string
}
