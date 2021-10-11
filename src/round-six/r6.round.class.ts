import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";


export class Round {
    _players: PlayerDTO[] = [];
    _deadPlayers: PlayerDTO[] = [];
    _eventPhrases: string[] = [];
    _max_players_for_this_round: number;
   
    constructor(_players: PlayerDTO[]) {
       this._players = _players;
    
   }


   getDeadPlayers(){
    return this._deadPlayers;
   }


  
    
}