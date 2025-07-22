import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
async signup(@Body() dto: AuthDto) {
  return this.authService.signup(dto);
}

@Post('login')
async login(@Body() dto: LoginDto) {
  return this.authService.login(dto);
}
}