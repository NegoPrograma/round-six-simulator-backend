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

export class RoundTwoService extends IndividualRound{
    _max_players_for_this_round = 25;
     _roundDeathPhrase: string[] = 
        [
            " quebrou o biscoito, e morreu!",
            " tava morto de fome e comeu o biscoito, acabou morrendo.",
            " tentou lamber e derreteu o biscoito todo! Faleceu.",
            " quase conseguiu, quebrou o biscoito na hora de mostrar o resultado!",
            " não suportou a pressão e foi pra cima dos guardas, fora brutalmente fuzilado."
        ];
     _roundSurvivalPhrase: string[] = 
     [
         " trapaceou e levou a melhor, vai viver mais um dia pra contar a história.",
         " conseguiu fazer a figura com perfeição, e sobreviveu.",
         " quase quebrou o biscoito, mas por pura sorte, entregou ele inteiro!",
         " teve a ideia genial de lamber a parte de trás, sobreviveu!",
         " viu alguém lambendo o biscoitinho, sacou a ideia e fez também, sobreviveu!",
     ];

}