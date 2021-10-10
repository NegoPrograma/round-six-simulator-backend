import { Injectable } from "@nestjs/common";
import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";
import { Round } from "./r6.round.interface";

/**
 * Futuramente criar interface para abstrair os rounds, tendo:
 *  as frases de sobrevivencia, 
 * de morte ou de equipe, 
 * o método getSurvivors que deve ser modularizavel de acordo com regras simples que as pessoas vão poder escolher
 * no próprio front end, mas isso é bem pro futuro mesmo. 
 */

export class RoundOneService implements Round{

     _players: PlayerDTO[];
     _deadPlayers: PlayerDTO[] = [];
     _roundDeathPhrase: string = " se mexeu, e morreu!";
     _roundSurvivalPhrase: string = " brincou como um mestre e sobreviveu!";

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
        console.log(this._players);
        console.log('---');
        console.log(this._deadPlayers);
        
        
        
        this._players = this._players.map((player) => {
            player.eventPhrase = player.name + this._roundSurvivalPhrase;
            return player;
        });
        
        this._deadPlayers = this._deadPlayers.map((player) => {
            player.eventPhrase = player.name + this._roundDeathPhrase
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