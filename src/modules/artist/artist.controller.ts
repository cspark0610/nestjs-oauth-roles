import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ArtistService } from '@modules/artist/artist.service';
import { Artist } from '@modules/artist/artist.entity';
import { CreateArtistDto } from '@modules/artist/artist.create.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '@src/guards/roles.guard';
import { Roles } from '@src/decorators/custom-roles.decorator';

@Controller('artists')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getArtists(): Promise<Artist[]> {
    return this.artistService.getArtists();
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('user', 'admin')
  @Get('/:name')
  getArtistByName(@Param('name') artistName: string): Promise<Artist> {
    return this.artistService.getArtistByName(artistName);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @Post()
  createArtist(@Body() payload: CreateArtistDto): Promise<Artist> {
    return this.artistService.createArtist(payload);
  }
}
