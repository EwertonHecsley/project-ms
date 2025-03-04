import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env.validation';
import { ConsulModule } from './consul/consul.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        validate
      }),
    ConsulModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
