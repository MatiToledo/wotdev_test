import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UUID } from 'crypto';
import { User } from 'src/user/user.entity';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company) private readonly companyRepository: typeof Company,
  ) {}

  async create(data: CreateCompanyDto): Promise<Company> {
    try {
      const companyCreated = await this.companyRepository.create(data);
      return companyCreated;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findById(id: UUID): Promise<Company> {
    try {
      return this.companyRepository.findByPk(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAll(): Promise<Company[]> {
    try {
      return this.companyRepository.findAll({ include: [User] });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
