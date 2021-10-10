import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";
import { Round } from "./r6.round.class";


export class GroupRound extends Round {
    _roundResultsPhrases: string[] = [];
  /* 

   round(){
       this.setSurvivors(RoundHelper.setNumberOfSurvivors(this._players.length));
       this.setEventPhrases();
       return {
           alivePlayers: this._players,
           deadPlayers: this.getDeadPlayers()
       }
   }



   setEventPhrases(winners: PlayerDTO[], losers: PlayerDTO[]){
       //winner1, winner 2 + frase randomica + loser1, loser2
   }


   setSurvivors(numberOfMiniRounds,peoplePerRound){
       let limit = this._players.length -1;
       for(let i = 0; i < numberOfSurvivors; i++){
           let randomIndex = Math.floor(Math.random() * limit);

           while(this._deadPlayers.includes(this._players[randomIndex]) || this._players[randomIndex] == undefined)
                   randomIndex = Math.floor(Math.random() * limit);
           this._deadPlayers.push(this._players.splice(randomIndex,1)[0]);
       }
   }
    */
}