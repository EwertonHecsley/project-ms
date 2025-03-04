import { Module } from '@nestjs/common';
import { ConsulService } from './consul.service';
import { ConsulController } from './consul.controller';

@Module({
    providers: [ConsulService],
    controllers: [ConsulController]
})
export class ConsulModule { }
