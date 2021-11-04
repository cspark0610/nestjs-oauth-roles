import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artist')
export class Artist {
  @PrimaryGeneratedColumn('increment') id: string;
  @Column({ nullable: false, type: 'varchar' }) name: string;
}
