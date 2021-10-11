import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";
import { Round } from "./r6.round.class";


export class IndividualRound  extends Round{
    _roundDeathPhrase: string[] = [];
    _roundSurvivalPhrase: string[] = [];
   

   round(){
       this.setSurvivors(this._players.length/2);
       this.setEventPhrases();
       return {
           alivePlayers: this._players,
           deadPlayers: this.getDeadPlayers()
       }
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


   /**
    * 
    * Randomizing algorithm has to be updated. thinking on add numerical ids to playerDTO, and creating a
    * array of processed ids, so we have just to check if this players id has been processed, instead
    * of comparing the entire piece of data.
    * 
    * OK FIRST TRY RANDOMIZING ALGORITHM:
    * 
    * LETS JUST RANDOMIZE THE PLAYERS ORDERS AND TAKE OUT THE N ONES THAT SHOULD DIE
    * THIS LOGIC ALSO APLIES TO GROUP ROUNDS AS WE JUST NEED TO TAKE N PLAYERS TO LIVE
    * AND N PLAYERS TO DIE AND PUT THEN BOTH AT THE SAME ROUND RESULT
    * @param numberOfSurvivors Max Number of Survivor for this round
    */
   setSurvivors(numberOfDeadPlayers){
       /*let limit = this._players.length -1;
       for(let i = 0; i < numberOfSurvivors; i++,limit--){
           let randomIndex = Math.floor(Math.random() * limit);

           while(this._deadPlayers.includes(this._players[randomIndex]) || this._players[randomIndex] == undefined){
                   randomIndex = Math.floor(Math.random() * limit);
           }
           this._deadPlayers.push(this._players.splice(randomIndex,1)[0]);
       }*/
       this._players = this.shuffleArray(this._players);

       for(let i = 0; i < numberOfDeadPlayers; i++){
           this._deadPlayers.push(this._players[i]);
       }


   }

    shuffleArray(array: PlayerDTO[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
    
}