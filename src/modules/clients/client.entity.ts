import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'scopes sapce separated values', length: 500, nullable: false })
  scopes: string;

  @Column({ name: 'redirect_uri', nullable: false })
  redirectUri: string;

  @Column({ name: 'accessTokenExpiresInSeconds', nullable: false, default: 72000 })
  accessTokenExpiresInSeconds: number;

  @Column({ name: 'refreshTokenExpiresInSeconds', nullable: false, default: 72000 })
  refreshTokenExpiresInSeconds: number;
}
