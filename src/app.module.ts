import { Module } from '@nestjs/common';
import { LLMModule } from './modules/llm/llm.module';

@Module({
  imports: [LLMModule],
})
export class AppModule {}
