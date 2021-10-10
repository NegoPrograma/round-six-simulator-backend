import { Module } from '@nestjs/common';
import { RoundsController } from './r6.controller';
import { RoundOneService } from './r6.roundOne.service';
import { RoundThreeService } from './r6.roundThree.service';
import { RoundTwoService } from './r6.roundTwo.service';

@Module({
  imports: [],
  controllers: [RoundsController],
  providers: [RoundOneService,RoundTwoService,RoundThreeService],
})
export class RoundSixModule {}
