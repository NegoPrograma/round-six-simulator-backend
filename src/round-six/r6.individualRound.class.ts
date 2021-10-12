import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";
import { Round } from "./r6.round.class";


export class IndividualRound  extends Round{
    _roundDeathPhrase: string[] = [];
    _roundSurvivalPhrase: string[] = [];
   


   round(): Object{
        let error = this.errorOnOuterPlayerLimit();
        if(error != null)
            return error;
        this._players = RoundHelper.fillRemainingPlayers(this._players,this._max_players_for_this_round);
        this.setSurvivors(this._players.length/this._death_divider);
        this.setEventPhrases();
        return {
            players: this._players,
            events: this._event_phrases,
            deadPlayers: this.getDeadPlayers()
        }
   }


   setEventPhrases(): void{
       this._players.map((player) => {
           let eventPhrase = this._roundSurvivalPhrase[Math.floor(Math.random() * this._roundSurvivalPhrase.length)]
           this._event_phrases.push(player.name + eventPhrase);
       });
       
       this._dead_players.map((player) => {
           let eventPhrase = this._roundDeathPhrase[Math.floor(Math.random() * this._roundDeathPhrase.length)];
           this._event_phrases.push(player.name + eventPhrase);
       });

       this._event_phrases = RoundHelper.shuffleArray(this._event_phrases);
   }


   setSurvivors(numberOfDeadPlayers): void{
        this._players = RoundHelper.shuffleArray(this._players);
        this._dead_players.push(...this._players.splice(0,numberOfDeadPlayers));
        console.log(this._players);
        console.log(this._players.length);
        console.log(this._dead_players);
   }
    

    
}