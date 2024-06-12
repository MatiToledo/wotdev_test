import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from 'src/company/company.entity';
import { CompanyModule } from 'src/company/company.module';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [CompanyModule, SequelizeModule.forFeature([User, Company])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
