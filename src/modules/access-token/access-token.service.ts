import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';

@Injectable()
export class AccessTokenService {
  constructor(private jwtService: JwtService) {}

  async generateToken(user: User): Promise<string> {
    let payload = { sub: user.id, userRole: user.roles };
    if (user.roles.length > 0) payload['roles'] = user.roles;
    return this.jwtService.sign(payload);
  }
}
