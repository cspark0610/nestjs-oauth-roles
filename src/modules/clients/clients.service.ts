import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { OAuthService, Provider } from '../oauth/oauth.service';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private clientsRepository: Repository<Client>,
    private OAuthService: OAuthService
  ) {}
  async affiliateClient(client: Client): Promise<string> {
    try {
      let c: Client = await this.clientsRepository.save(client);
      Promise.resolve(c);
      return await this.OAuthService.validateOAuthLogin(c.scopes, Provider.GOOGLE, c.name);
    } catch (error) {
      if (error.code) throw new BadRequestException('Unable to create the client due to invalid client data.');
    }
  }
}
