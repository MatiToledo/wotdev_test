import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

@InputType()
export class GetAllUsersDto {
  @IsUUID(4)
  @IsOptional()
  @Field({ nullable: true })
  companyId: UUID;
}
