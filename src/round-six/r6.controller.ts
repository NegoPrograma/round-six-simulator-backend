import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayerDTO } from './r6.players.dto';
import { RoundOneService } from './r6.roundOne.service';
import { RoundTwoService } from './r6.roundTwo.service';

@Controller('/round')
export class RoundsController{


    @Post('/1')
    startRoundOne(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        let roundOne = new RoundOneService(players);
        let results = roundOne.round();
        return results;
    }


    @Post('/2')
    startRoundTwo(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        let roundOne = new RoundTwoService(players);
        let results = roundOne.round();
        return results;
    }


}