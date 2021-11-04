import { Injectable } from '@nestjs/common';
import { Artist } from '@modules/artist/artist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtistDto } from '@modules/artist/artist.create.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist)
    private readonly artistRepository: Repository<Artist>,
  ) {}

  getArtists(): Promise<Artist[]> {
    return this.artistRepository.find();
  }

  async getArtistByName(name: string): Promise<Artist> {
    const artist = await this.artistRepository.findOne({
      where: {
        name,
      },
    });
    if (!artist) throw new NotFoundException();

    return artist;
  }

  createArtist(payload: CreateArtistDto): Promise<Artist> {
    const artist = this.artistRepository.create(payload);

    return this.artistRepository.save(artist);
  }
}
