import { Module, DynamicModule, Global } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

interface DynamicModuleOptions {
  entities: any[];
}

@Global()
@Module({})
export class DynamicEntitiesModule {
  static register(options: DynamicModuleOptions): DynamicModule {
    return {
      module: DynamicEntitiesModule,
      imports: [SequelizeModule.forFeature(options.entities)],
      providers: [
        {
          provide: 'DYNAMIC_ENTITIES',
          useValue: options.entities,
        },
      ],
      exports: ['DYNAMIC_ENTITIES'],
    };
  }
}
