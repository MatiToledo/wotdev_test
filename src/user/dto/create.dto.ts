import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

@InputType()
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;

  @IsNotEmpty()
  @IsUUID()
  @Field()
  companyId: UUID;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;
}
