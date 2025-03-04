import { Controller, Post, Body } from '@nestjs/common';
import { ConsulService } from './consul.service';


@Controller('consul')
export class ConsulController {
    constructor(private readonly consulService: ConsulService) { }

    @Post('register')
    async register(@Body() serviceData: { name: string; address: string; port: number }) {
        return this.consulService.registerService(serviceData);
    }
}