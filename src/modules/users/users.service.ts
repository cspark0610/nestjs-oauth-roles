import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  //implement signup method
  async signup(user: User): Promise<User> {
    const created = this.usersRepository.create(user);
    return created;
  }
}
