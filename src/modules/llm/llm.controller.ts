import { Controller, Post, Param, Body } from '@nestjs/common';
import { LLMService } from './llm.service';
import { InitContextDto } from './dto/init-context.dto';
import { ChatDto } from './dto/chat.dto';

/**
 * Controller LLM
 *
 * Expondrá dos endpoints alineados con los métodos solicitados:
 * - POST /llm/coaching/:userId  -> LLMService.FLOCoaching
 * - POST /llm/question/:userId  -> LLMService.FLOQuestion
 */
@Controller('llm')
export class LLMController {
  constructor(private readonly service: LLMService) {}

  @Post('coaching/:userId')
  async coaching(@Param('userId') userId: string, @Body() body: InitContextDto) {
    // body.text -> passed to service and returns { text }
    return this.service.FLOCoaching(userId, { text: body?.text });
  }

  @Post('question/:userId')
  async question(@Param('userId') userId: string, @Body() body: ChatDto) {
    return this.service.FLOQuestion(userId, { text: body?.text });
  }
}
