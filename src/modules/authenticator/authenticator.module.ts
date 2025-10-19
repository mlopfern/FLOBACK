import { Module } from '@nestjs/common';
import { AuthenticatorService } from './authenticator.service';
import { AuthenticatorController } from './authenticator.controller';

@Module({
  providers: [AuthenticatorService],
  controllers: [AuthenticatorController],
  exports: [AuthenticatorService],
})
export class AuthenticatorModule {}
