import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;
}
