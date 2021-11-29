import { NestFactory } from '@nestjs/core';
import { RoundSixModule } from './round-six/r6.module';

async function bootstrap() {
  const app = await NestFactory.create(RoundSixModule);
  app.enableCors();
  await app.listen(3080);
}
bootstrap();
