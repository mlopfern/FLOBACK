import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AuthenticatorService } from './authenticator.service';

@Controller('auth')
export class AuthenticatorController {
  constructor(private readonly auth: AuthenticatorService) {}

  @Post('login')
  login(@Body('username') username: string) {
    return this.auth.login(username || 'anonymous');
  }

  @Get('validate')
  validate(@Query('token') token: string) {
    return this.auth.validate(token);
  }

  @Post('logout')
  logout(@Body('token') token: string) {
    return { ok: this.auth.logout(token) };
  }
}
