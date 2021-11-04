import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Artist } from '../modules/artist/artist.entity';

export default class CreateArtists implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Artist, ['name'])
      .values([
        { name: 'Rubens' },
        { name: 'Rothko' },
        { name: 'Joan Miro' },
        { name: 'Rembrandt' },
        { name: 'Durer' },
        { name: 'Diego Rivera' },
        { name: 'Munch' },
        { name: 'Chagall' },
        { name: 'Munch' },
        { name: 'Klimt' },
      ])
      .execute();
  }
}
