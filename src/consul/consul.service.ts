import { Injectable } from '@nestjs/common';
import Consul from 'consul';

@Injectable()
export class ConsulService {
    private readonly consul = new Consul({ host: process.env.CONSUL_HOST || 'localhost' });

    async registerService(serviceData: { name: string; address: string; port: number }) {
        try {
            const serviceId = `${serviceData.name}-${serviceData.port}`;
            await this.consul.agent.service.register(
                {
                    id: serviceId,
                    name: serviceData.name,
                    address: serviceData.address,
                    port: serviceData.port,
                    check:
                    {
                        name: serviceData.name,
                        http: `http://${serviceData.address}:${serviceData.port}/health`,
                        interval: '10s',
                        timeout: '5s',
                    },
                });
            console.log(`✅ Serviço ${serviceData.name} registrado no Consul`);

            return { message: `Serviço ${serviceData.name} registrado` };

        } catch (err) {
            console.error('Erro ao registrar no Consul:', err);
            throw err;
        }
    }
}
