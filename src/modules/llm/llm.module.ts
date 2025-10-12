import { Module } from '@nestjs/common';
import { LLMService } from './llm.service';
import { LLMController } from './llm.controller';

/**
 * Module: LLMModule
 *
 * Módulo que expone la funcionalidad de interacción con FLO/LLM.
 */
@Module({
  providers: [LLMService],
  controllers: [LLMController],
  exports: [LLMService],
})
export class LLMModule {}
