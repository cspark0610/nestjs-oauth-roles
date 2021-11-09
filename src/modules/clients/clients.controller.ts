import { Body, Controller, Post } from '@nestjs/common';
import { Client } from './client.entity';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Post()
  registerOAuthClient(@Body() client: Client) {
    return this.clientsService.registerOAuthClient(client);
  }
}
