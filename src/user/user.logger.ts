import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  // método 'log', envia mensagem no console
  log(message: string) {
    console.log('[LOG 💬]', message);
  }
}
