import { Field, ObjectType } from '@nestjs/graphql';
import { UUID } from 'crypto';
import {
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/user/user.entity';

@Table
@ObjectType()
export class Company extends Model<Company> {
  @Field()
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: UUID;

  @Column(DataType.STRING)
  @Field()
  name: string;

  @HasMany(() => User)
  @Field(() => [User])
  users: User[];
}
