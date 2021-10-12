import { GroupRound } from "./r6.groupRound.class";


export class RoundSixService extends GroupRound{



    _max_players_for_this_round = 2;
    _death_divider = 2;
    _event_phrases =
    [
        '&w fingiu jogar justo e meteu a facada em &l! Faturou o prêmio.',
        '&l se sacrificou para o bem de &w! &w saiu de bolso cheio e coração vazio.',
        'Aconteceu uma batalha justa entre &l e &w, resultando na vitoria de &w.'
    ]


}