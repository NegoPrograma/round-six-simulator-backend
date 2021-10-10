import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";


export class GroupRound {
    _players: PlayerDTO[];
    _deadPlayers: PlayerDTO[] = [];
    _roundDeathPhrase: string[] = [];
    _roundSurvivalPhrase: string[] = [];
   
    constructor(_players: PlayerDTO[]) {
       this._players = _players;
   }

   round(){
       this.setSurvivors(RoundHelper.setNumberOfSurvivors(this._players.length));
       this.setEventPhrases();
       return {
           alivePlayers: this._players,
           deadPlayers: this.getDeadPlayers()
       }
   }

   getDeadPlayers(){
    return this._deadPlayers;
   }


   setEventPhrases(){
       this._players = this._players.map((player) => {
           let eventPhrase = this._roundSurvivalPhrase[Math.floor(Math.random() * this._roundSurvivalPhrase.length)]
           player.eventPhrase = player.name + eventPhrase;
           return player;
       });
       
       this._deadPlayers = this._deadPlayers.map((player) => {
           let eventPhrase = this._roundDeathPhrase[Math.floor(Math.random() * this._roundDeathPhrase.length)];
           player.eventPhrase = player.name + eventPhrase;
           return player;
       })
   }


   setSurvivors(numberOfSurvivors){
       let limit = this._players.length -1;
       for(let i = 0; i < numberOfSurvivors; i++){
           let randomIndex = Math.floor(Math.random() * limit);

           while(this._deadPlayers.includes(this._players[randomIndex]) || this._players[randomIndex] == undefined)
                   randomIndex = Math.floor(Math.random() * limit);
           this._deadPlayers.push(this._players.splice(randomIndex,1)[0]);
       }
   }
    
}