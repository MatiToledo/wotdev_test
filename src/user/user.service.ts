import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CompanyService } from 'src/company/company.service';
import { CreateUserDto } from './dto/create.dto';
import { GetAllUsersDto } from './dto/get_all.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
    private companyService: CompanyService,
  ) {}

  findAll(args: GetAllUsersDto): Promise<User[]> {
    const { companyId } = args;
    const where = companyId && { companyId };

    return User.findAll({ where });
  }

  async create(data: CreateUserDto): Promise<User> {
    try {
      const existCompany = await this.companyService.findById(data.companyId);
      if (!existCompany) {
        throw new NotFoundException('The specified company does not exist');
      }
      const userCreated = await this.userRepository.create(data);
      return userCreated;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
