import { Module } from '@nestjs/common';

import { RoundsController } from './r6.controller';
import { RoundSixService } from './r6.service';

@Module({
  imports: [],
  controllers: [RoundsController],
  providers: [RoundSixService],
})
export class RoundSixModule {}
