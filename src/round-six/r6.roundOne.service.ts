import { Injectable } from "@nestjs/common";
import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";
import { IndividualRound } from "./r6.individualRound.class";



export class RoundOneService extends IndividualRound{

     _max_players_for_this_round = 40;
     _death_divider = 1.6;
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