import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { OAuthService } from './oauth.service';

@Module({
  controllers: [OauthController],
  providers: [OAuthService]
})
export class OauthModule {}
