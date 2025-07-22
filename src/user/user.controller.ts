import { Controller, Get, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';


  @UseGuards(JwtGuard)
@Controller('profile')
export class UserController {
  constructor(private userService: UserService) {}


  @Get()
  getProfile(@GetUser() user: User) {
    return {
      email: user.email, 
      name: user.name,
  }
}
}
