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

export class RoundTwoService implements Round{

     _players: PlayerDTO[];
     _deadPlayers: PlayerDTO[] = [];
     _roundDeathPhrase: string[] = 
        [
            " quebrou o biscoito, e morreu!",
            " tava morto de fome e comeu o biscoito, acabou morrendo.",
            " tentou lamber e derreteu o biscoito todo! Faleceu."
        ];
     _roundSurvivalPhrase: string[] = 
     [
         " trapaceou e levou a melhor, vai viver mais um dia pra contar a história.",
         " teve a ideia genial de lamber a parte de trás, sobreviveu!",
         " viu alguém lambendo o biscoitinho, sacou a ideia e fez também, sobreviveu!",
     ];
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
        console.log(this._deadPlayers);
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