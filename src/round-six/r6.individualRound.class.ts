import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";
import { Round } from "./r6.round.class";


export class IndividualRound  extends Round{
    _roundDeathPhrase: string[] = [];
    _roundSurvivalPhrase: string[] = [];
   


   round(): Object{
        this._players = RoundHelper.fillRemainingPlayers(this._players,this._max_players_for_this_round);
        this.setSurvivors(this._players.length/this._death_divider);
        this.setEventPhrases();
        return {
            players: this._players,
            events: this._eventPhrases,
            deadPlayers: this.getDeadPlayers()
        }
   }


   setEventPhrases(): void{
       this._players.map((player) => {
           let eventPhrase = this._roundSurvivalPhrase[Math.floor(Math.random() * this._roundSurvivalPhrase.length)]
           this._eventPhrases.push(player.name + eventPhrase);
       });
       
       this._deadPlayers.map((player) => {
           let eventPhrase = this._roundDeathPhrase[Math.floor(Math.random() * this._roundDeathPhrase.length)];
           this._eventPhrases.push(player.name + eventPhrase);
       });

       this._eventPhrases = RoundHelper.shuffleArray(this._eventPhrases);
   }


   setSurvivors(numberOfDeadPlayers): void{
        this._players = RoundHelper.shuffleArray(this._players);
        this._deadPlayers.push(...this._players.splice(0,numberOfDeadPlayers));
        console.log(this._players);
        console.log(this._players.length);
        console.log(this._deadPlayers);
   }
    

    
}