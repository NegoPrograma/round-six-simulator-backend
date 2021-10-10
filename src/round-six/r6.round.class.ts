import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";


export class Round {
    _players: PlayerDTO[];
    _deadPlayers: PlayerDTO[] = [];
   
    constructor(_players: PlayerDTO[]) {
       this._players = _players;
   }


   getDeadPlayers(){
    return this._deadPlayers;
   }


  
    
}