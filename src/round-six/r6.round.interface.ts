import { PlayerDTO } from "./r6.players.dto";


export interface Round {
    _players: PlayerDTO[];
    _roundDeathPhrase: any;
    _roundSurvivalPhrase: any;

    setSurvivors(numberOfSurvivors: number);

    setEventPhrases();
    
    
}