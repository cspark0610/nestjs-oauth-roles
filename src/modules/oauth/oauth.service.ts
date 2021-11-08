import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

export enum Provider {
  GOOGLE = 'google'
}

@Injectable()
export class OAuthService {
  private readonly JWT_SECRET_KEY = process.env.JWTKEY;

  constructor() {}

  async validateOAuthLogin(thirdPartyId: string, provider: Provider, name: string): Promise<string> {
    try {
      const payload = { thirdPartyId, provider, name };
      // 1 hour
      return sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 });
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

  reportJwt(req) {
    const jwt: string = req.user.jwt;
    if (jwt)
      return {
        message: 'authentication succeeded',
        jwt: jwt
      };
    else return { message: 'Authentication failed.' };
  }
}
