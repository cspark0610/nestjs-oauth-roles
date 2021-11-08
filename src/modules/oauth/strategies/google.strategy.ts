import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { OAuthService, Provider } from '../oauth.service';

@Injectable()
//http://www.passportjs.org/packages/passport-google-oauth20/
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly oAuthService: OAuthService) {
    super({
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      // our callback
      callbackURL: process.env.callbackURL,
      // optional??
      scope: ['email', 'profile'],
      passReqToCallback: true
    });
  }

  async validate(request: any, accessToken: string, refreshToken: string, profile, done: VerifyCallback): Promise<any> {
    try {
      const jwt: string = await this.oAuthService.validateOAuthLogin(profile.id, Provider.GOOGLE, profile.name);
      const user = {
        jwt
      };
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
