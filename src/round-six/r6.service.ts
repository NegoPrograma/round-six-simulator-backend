import { Injectable } from "@nestjs/common";
import { PlayerDTO } from "./r6.players.dto";

/**
 * Futuramente criar interface para abstrair os rounds, tendo:
 *  as frases de sobrevivencia, 
 * de morte ou de equipe, 
 * o método getSurvivors que deve ser modularizavel de acordo com regras simples que as pessoas vão poder escolher
 * no próprio front end, mas isso é bem pro futuro mesmo. 
 */

export class RoundSixService {

    private _players: PlayerDTO[];
    private _roundOneDeathPhrase: string = " se mexeu, e morreu!";
    private _roundOneSurvivalPhrase: string = " brincou como um mestre e sobreviveu!";

    constructor(_players: PlayerDTO[]) {
        this._players = _players;
    }


    static setAllAlive(players: PlayerDTO[]){
        return players.map((player)=>{
            player.isAlive = true;
            return player;
        });
    }

    roundOne(){
        this.setSurvivors(this._players.length/2);
        this.setDayOneEventPhrases();
        return {
            alivePlayers: this.getAlivePlayers(),
            deadPlayers: this.getDeadPlayers()
        }
    }

    getDeadPlayers(){
     return this._players.filter((player) => 
            !player.isAlive
        );
        

    }

    getAlivePlayers(){
        return this._players.filter((player) => player.isAlive);
    }

    setDayOneEventPhrases(){
        for(let i = 0; i < this._players.length; i++){
            if(this._players[i].isAlive)
                this._players[i].eventPhrase = this._players[i].name + this._roundOneSurvivalPhrase;
            else
                this._players[i].eventPhrase = this._players[i].name + this._roundOneDeathPhrase;
        }
    }


    setSurvivors(numberOfSurvivors){
        let limit = this._players.length;
        let survivors: PlayerDTO[] = new Array<PlayerDTO>();
        for(let i = 0; i < numberOfSurvivors; i++){
            let randomIndex = Math.floor(Math.random() * limit);
            this._players[randomIndex].isAlive = false;
        }
    }


}