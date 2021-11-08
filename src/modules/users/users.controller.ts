import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  signup(@Body() user: User) {
    return this.usersService.signup(user);
  }
}
