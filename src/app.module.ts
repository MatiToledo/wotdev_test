import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Company } from './company/company.entity';
import { CompanyModule } from './company/company.module';
import { DatabaseModule } from './database/database.module';
import { DynamicEntitiesModule } from './entities/entities.module';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      installSubscriptionHandlers: true,
      introspection: true,
    }),
    DynamicEntitiesModule.register({ entities: [User, Company] }),
    UserModule,
    CompanyModule,
  ],
})
export class AppModule {}
