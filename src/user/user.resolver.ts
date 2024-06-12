import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create.dto';
import { GetAllUsersDto } from './dto/get_all.dto';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async getUsers(
    @Args('args', { type: () => GetAllUsersDto, nullable: true })
    args: GetAllUsersDto,
  ): Promise<User[]> {
    return this.userService.findAll(args);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserDto): Promise<User> {
    return this.userService.create(input);
  }
}
