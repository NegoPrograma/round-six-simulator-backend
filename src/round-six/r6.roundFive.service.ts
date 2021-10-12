import { Injectable } from "@nestjs/common";
import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";
import { IndividualRound } from "./r6.individualRound.class";



export class RoundFiveService extends IndividualRound{

     _max_players_for_this_round = 4;
     _death_divider = 2;
     _roundDeathPhrase: string[] = 
        [
            " tentou a sorte e pulou no vidro errado!",
            " foi empurrado por alguém para advinhar o piso certo.",
            " não aceitou ir na frente, tentou lutar mas perdeu e caiu lá de cima!"
        ];
     _roundSurvivalPhrase: string[] = 
     [
         " deu a sorte de entender de vidro, conseguiu ir até o fim.",
         " pegou um número alto e deu sorte, acharam o caminho antes dele!",
         " tentou a sorte e descobriu o caminho mesmo sem querer!",
     ];

     

}