import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OAuthService } from './oauth.service';

@Controller('oauth')
export class OauthController {
  constructor(private readonly OAuthService: OAuthService) {}
  @Get('google')
  googleLogin() {
    // initiates the Google OAuth2 login flow
  }

  @Get('google/callback')
  googleLoginCallback(@Request() req) {
    // handles the Google OAuth2 callback
    return this.OAuthService.reportJwt(req);
  }

  @Post('token')
  async generateToken(@Request() req) {
    return this.OAuthService.reportJwt(req);
  }
}
