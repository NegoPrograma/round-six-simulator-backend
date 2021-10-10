import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoundHelper } from './r6.helper';
import { PlayerDTO } from './r6.players.dto';
import { RoundOneService } from './r6.roundOne.service';
import { RoundTwoService } from './r6.roundTwo.service';
//40/1.02/1.5/2/2/2/2
@Controller('/round')
export class RoundsController{


    @Post('/1')
    startRoundOne(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        players = RoundHelper.fillRemainingPlayers(players);
        console.log(players);
        
        let roundOne = new RoundOneService(players);
        if(players.length > 40)
            return {'erro':"O número máximo de players para o 1 round é de 40 pessoas."};
        let results = roundOne.round();
        return results;
    }


    @Post('/2')
    startRoundTwo(@Body() data){
        let players: PlayerDTO[] = <PlayerDTO[]> data.players;
        let roundTwo = new RoundTwoService(players);
        if(players.length < 20)
            return {'erro':"O número mínimo de players para o 1 round é de 30 pessoas."};
        let results = roundTwo.round();
        return results;
    }


}