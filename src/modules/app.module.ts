import configuration from '@config/configuration';
import { ArtistModule } from '@modules/artist/artist.module';
import { DBModule } from '@modules/db/db.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    DBModule,
    ArtistModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
