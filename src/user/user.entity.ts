import { Field, ObjectType } from '@nestjs/graphql';
import { UUID } from 'crypto';
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Company } from 'src/company/company.entity';

@Table
@ObjectType()
export class User extends Model<User> {
  @Field()
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: UUID;

  @Field()
  @Column(DataType.STRING)
  name: string;

  @Field()
  @Unique
  @Column(DataType.STRING)
  email: string;

  @Field()
  @ForeignKey(() => Company)
  @Column(DataType.UUID)
  companyId: UUID;

  @Field(() => Company)
  @BelongsTo(() => Company)
  company: Company;
}
