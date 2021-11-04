import { Module } from '@nestjs/common';
import { Artist } from '@modules/artist/artist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistController } from '@modules/artist/artist.controller';
import { ArtistService } from '@modules/artist/artist.service';

@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  controllers: [ArtistController],
  providers: [ArtistService],
  exports: [TypeOrmModule.forFeature([Artist])],
})
export class ArtistModule {}
