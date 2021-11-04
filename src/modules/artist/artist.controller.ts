import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArtistService } from '@modules/artist/artist.service';
import { Artist } from '@modules/artist/artist.entity';
import { CreateArtistDto } from '@modules/artist/artist.create.dto';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getArtists(): Promise<Artist[]> {
    return this.artistService.getArtists();
  }

  @Get('/:name')
  getArtistByName(@Param('name') artistName: string): Promise<Artist> {
    return this.artistService.getArtistByName(artistName);
  }

  @Post()
  createArtist(@Body() payload: CreateArtistDto): Promise<Artist> {
    return this.artistService.createArtist(payload);
  }
}
