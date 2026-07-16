import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './utils/transform.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // executa antes do controller
  app.useGlobalInterceptors(new TransformInterceptor()); // executa após controller (tipo um middleware)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
