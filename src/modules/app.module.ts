import configuration from '@config/configuration';
import { ArtistModule } from '@modules/artist/artist.module';
import { DBModule } from '@modules/db/db.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthorizationModule } from './authorization/authorization.module';
import { OauthModule } from './oauth/oauth.module';
import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    DBModule,
    ArtistModule,
    AuthorizationModule,
    OauthModule,
    ClientsModule,
    UsersModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
