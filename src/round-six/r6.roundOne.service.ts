import { Injectable } from "@nestjs/common";
import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";
import { IndividualRound } from "./r6.individualRound.class";

/**
 * Futuramente criar interface para abstrair os rounds, tendo:
 *  as frases de sobrevivencia, 
 * de morte ou de equipe, 
 * o método getSurvivors que deve ser modularizavel de acordo com regras simples que as pessoas vão poder escolher
 * no próprio front end, mas isso é bem pro futuro mesmo. 
 */

export class RoundOneService extends IndividualRound{

     _roundDeathPhrase: string[] = 
        [
            " tropeçou quando a boneca virou, putz! Ta morto.",
            " foi empurrado por alguém e foi detectado, acabou morrendo.",
            " ficou com muito medo de avançar e não chegou a tempo! Direto pro caixão."
        ];
     _roundSurvivalPhrase: string[] = 
     [
         " foi só na maciota atrás de outro player, sobreviveu.",
         " permaneceu inabalável mesmo com tanta morte, e jogou perfeitamente!",
         " quase se mexeu, mas perseverou e ganhou o round!",
     ];

    


}