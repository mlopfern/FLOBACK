
import { Injectable } from '@nestjs/common';

/**
 * Servicio LLM (mock/in-memory)
 *
 * Expone dos métodos principales solicitados:
 * - FLOCoaching(userId, payload): manejar interacciones de coaching (inicialización, chat, cierre)
 * - FLOQuestion(userId, payload): manejar preguntas sobre información de FLO (precios, planes, whoami)
 *
 * Ambos métodos reciben un `payload` genérico y devuelven respuestas simuladas.
 */
@Injectable()
export class LLMService {
  /**
   * FLOCoaching: orquesta las operaciones de coaching con FLO.
   * payload puede contener { action: 'init'|'chat'|'close', context?, message? }
   */
  /**
   * FLOCoaching: recibe { text } y devuelve { text } (mock)
   * El campo `text` contendrá la instrucción o mensaje a enviar al LLM.
   */
  async FLOCoaching(userId: string, payload: { text: string }) {
    const text = payload?.text || '';
    // Aquí se procesaría el texto para determinar la acción (init/chat/close)
    // En mock: devolvemos una respuesta textual simple
    return { text: `FLOCoaching (mock) respuesta para ${userId}: ${text}` };
  }

  /**
   * FLOQuestion: responde preguntas sobre FLO (precios, planes, whoami, etc.)
   * payload puede contener { query: string }
   */
  /**
   * FLOQuestion: recibe { text } con la pregunta y devuelve { text } con la respuesta (mock)
   */
  async FLOQuestion(userId: string, payload: { text: string }) {
    const q = (payload?.text || '').toLowerCase();
    if (q.includes('precio') || q.includes('price')) {
      return { text: 'Los precios empiezan en 9.99€/mes (mock).' };
    }
    if (q.includes('quien') || q.includes('whoami')) {
      return { text: `Eres el usuario mock ${userId}.` };
    }
    if (q.includes('plan')) {
      return { text: 'Plan activo: Free (5 sesiones restantes) (mock).' };
    }
    return { text: `No tengo esa información en mock. Pregunta: ${payload?.text}` };
  }
}
