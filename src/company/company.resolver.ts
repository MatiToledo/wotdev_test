import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateCompanyDto } from './dto/create.dto';
import { Company } from './company.entity';
import { CompanyService } from './company.service';

@Resolver()
export class CompanyResolver {
  constructor(private companyService: CompanyService) {}

  @Query(() => [Company])
  async getCompanies(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Mutation(() => Company)
  async createCompany(
    @Args('input') input: CreateCompanyDto,
  ): Promise<Company> {
    return this.companyService.create(input);
  }
}
