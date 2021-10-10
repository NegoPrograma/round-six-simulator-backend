import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayerDTO } from './r6.players.dto';
import { RoundSixService } from './r6.service';

@Controller('/round')
export class RoundsController{


    @Post('/1')
    startRoundOne(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        players = RoundSixService.setAllAlive(players);
        let roundOne = new RoundSixService(players);
        let results = roundOne.roundOne();
        return results;
    }


    @Post('/2')
    startRoundTwo(@Body() players: PlayerDTO[]){
        
    }


}