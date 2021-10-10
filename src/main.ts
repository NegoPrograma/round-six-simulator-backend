import { NestFactory } from '@nestjs/core';
import { RoundSixModule } from './round-six/r6.module';

async function bootstrap() {
  const app = await NestFactory.create(RoundSixModule);
  await app.listen(3000);
}
bootstrap();
