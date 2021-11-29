import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayerDTO } from './r6.players.dto';
import { RoundFiveService } from './r6.roundFive.service';
import { RoundFourService } from './r6.roundFour.service';
import { RoundOneService } from './r6.roundOne.service';
import { RoundSixService } from './r6.roundSix.service';
import { RoundThreeService } from './r6.roundThree.service';
import { RoundTwoService } from './r6.roundTwo.service';
//40/1.6/1.5/2/2/2/2
@Controller('/round')
export class RoundsController{


    @Post('/1')
    startRoundOne(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        return new RoundOneService(players).round();
    }


    @Post('/2')
    startRoundTwo(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        return new RoundTwoService(players).round();
    }

    @Post('/3')
    startRoundThree(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        return new RoundThreeService(players).round();
    }

    @Post('/4')
    startRoundFour(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        return new RoundFourService(players).round();
    }

    @Post('/5')
    startRoundFive(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        return new RoundFiveService(players).round();
    }

    @Post('/six')
    startRoundSix(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        return new RoundSixService(players).round();
    }



}