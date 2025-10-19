import { Module } from '@nestjs/common';
import { LLMModule } from './modules/llm/llm.module';
import { AuthenticatorModule } from './modules/authenticator/authenticator.module';

/**
 * AppModule
 *
 * Punto de entrada del módulo raíz de la aplicación Nest.
 * - Importa los módulos de la aplicación (actualmente sólo LLMModule)
 * - Puedes añadir aquí otros módulos (UsersModule, MonitoringModule, etc.)
 *
 * Notas:
 * - El proyecto expone las rutas con el prefijo global `/api` (configurado en main.ts).
 * - Para modo mock (si existe un `MockModule`), podrías cargarlo condicionalmente
 *   para reemplazar providers en desarrollo. En este repositorio hay mocks bajo
 *   `src/mocks` que pueden utilizarse si amplías `AppModule` para cargarlos cuando
 *   `process.env.MOCK_MODE === 'true'`.
 */
@Module({
  imports: [LLMModule, AuthenticatorModule],
})
export class AppModule {}
