import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoundHelper } from './r6.helper';
import { PlayerDTO } from './r6.players.dto';
import { RoundOneService } from './r6.roundOne.service';
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


}