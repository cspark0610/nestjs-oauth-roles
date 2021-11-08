import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../clients/client.entity';
import { User } from '../users/user.entity';
import { Artist } from '../artist/artist.entity';
import { ConfigService } from '@nestjs/config';

//QueryFailedError: SQLITE_ERROR: near ",": syntax error
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'db.sqlite',
    //   synchronize: true,
    //   entities: [User, Client, Artist]
    // })
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'sqlite',
        database: config.get<string>('DB_NAME'),
        synchronize: true,
        entities: [User, Client, Artist]
      })
    })
  ],
  providers: []
})
export class DBModule {}
