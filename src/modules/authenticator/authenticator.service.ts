import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

/**
 * AuthenticatorService
 *
 * Servicio simple (in-memory) para gestionar autenticación de usuarios.
 * Métodos:
 * - login(username): crea un token y devuelve { token, user }
 * - validate(token): devuelve el user asociado o null
 * - logout(token): invalida el token
 *
 * NOTA: Esto es un ejemplo sencillo. Para producción usa JWT + persistencia.
 */
@Injectable()
export class AuthenticatorService {
  private tokens = new Map<string, any>();

  login(username: string) {
    const token = randomUUID();
    const user = { id: username, name: username };
    this.tokens.set(token, user);
    return { token, user };
  }

  validate(token: string) {
    return this.tokens.get(token) || null;
  }

  logout(token: string) {
    return this.tokens.delete(token);
  }
}
