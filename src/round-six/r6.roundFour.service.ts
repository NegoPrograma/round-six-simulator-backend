import { GroupRound } from "./r6.groupRound.class";


export class RoundFourService extends GroupRound{



    _max_players_for_this_round = 8;
    _death_divider = 2;
    _event_phrases =
    [
        '&w enganaram seus rivais, deixando &l para morrer sem chance de defesa.',
        '&l se sacrificaram para o bem de &w!',
        'Aconteceu uma batalha justa entre &l e &w, resultando na vitoria de &w.'
    ]


}