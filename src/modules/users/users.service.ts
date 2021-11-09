import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as moment from 'moment';
import { uid } from 'rand-token';
import { ResultTemplateToken } from '../oauth/entities/result-template';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>, private jwt: JwtService) {}

  async generateTokenFromCredentials(user): Promise<ResultTemplateToken> {
    const { username, password, roles } = user;
    const resource_owner = await this.usersRepository.findOne({
      where: [{ username: username.toLowerCase() }]
    });

    const payload = { sub: user.id, userRole: user.roles };

    return {
      access_token: this.jwt.sign(payload),
      token_type: process.env.BEARER,
      refresh_token: uid(32),
      expires_in: parseInt(moment(new Date()).add(2, 'hours').format('X')),
      scope: 'any'
    };
  }
}
