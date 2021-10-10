import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoundSixModule } from './round-six/r6.module';

@Module({
  imports: [RoundSixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
