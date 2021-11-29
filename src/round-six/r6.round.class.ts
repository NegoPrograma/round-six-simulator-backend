import { PlayerDTO } from "./r6.players.dto";


export class Round {
    _players: PlayerDTO[] = [];
    _dead_players: PlayerDTO[] = [];
    _event_phrases: string[] = [];
    _max_players_for_this_round: number;
    _death_divider: number;
   
    constructor(_players: PlayerDTO[]) {
       this._players = _players;
       
   }

   getDeadPlayers(){
    return this._dead_players;
   }

   errorOnOuterPlayerLimit(){
       if(this._players.length > this._max_players_for_this_round)
        return {'erro': 'limite de jogadores para esse round foi excedido.'}
    return null;
   }
   


  
    
}