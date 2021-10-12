import { Module } from '@nestjs/common';
import { RoundsController } from './r6.controller';
import { RoundFiveService } from './r6.roundFive.service';
import { RoundFourService } from './r6.roundFour.service';
import { RoundOneService } from './r6.roundOne.service';
import { RoundSixService } from './r6.roundSix.service';
import { RoundThreeService } from './r6.roundThree.service';
import { RoundTwoService } from './r6.roundTwo.service';

@Module({
  imports: [],
  controllers: [RoundsController],
  providers: [RoundOneService,RoundTwoService,RoundThreeService,RoundFourService,RoundFiveService,RoundSixService],
})
export class RoundSixModule {}
