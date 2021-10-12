import { RoundHelper } from "./r6.helper";
import { PlayerDTO } from "./r6.players.dto";
import { Round } from "./r6.round.class";


export class GroupRound extends Round {

    _event_phrases: string[] = [];
    _remaining_players: PlayerDTO[] = [];
    _events: string[] = [];
    _max_team_members: number;
    _mini_rounds: number;


    round() {
        let error = this.errorOnOuterPlayerLimit();
        if(error != null)
            return error;
        this._players = RoundHelper.fillRemainingPlayers(this._players,this._max_players_for_this_round);
        this.setSurvivors();
        return {
            players: this._remaining_players,
            events: this._events,
            deadPlayers: this.getDeadPlayers()
        }
    }



    setEventPhrases(winners: PlayerDTO[], losers: PlayerDTO[]) {
        let winnersString = '';
        winners.map((player, index) => {

            if (winners[index + 1] != undefined)
                winnersString += player.name + ', '
            else
                winnersString += player.name

        });

        let losersString = '';
        losers.map((player, index) => {

            if (losers[index + 1] != undefined)
                losersString += player.name + ', '
            else
                losersString += player.name

        });
        let randomIndex = Math.floor(Math.random() * this._event_phrases.length);
        let chosenEvent = this._event_phrases[randomIndex];
        chosenEvent = chosenEvent.replaceAll('&w', winnersString).replaceAll('&l', losersString);
        this._events.push(chosenEvent);

    }


    

    setSurvivors() {
        this._players = RoundHelper.shuffleArray(this._players);
        let players_per_round = Math.ceil(Math.sqrt(this._players.length));
        let miniRounds = players_per_round;
        for (let index = 0; index < miniRounds && this._players.length>0; index++) {
            let winners = this._players.splice(0,players_per_round/2);
            let losers = this._players.splice(0,players_per_round/2);
            this._remaining_players.push(...winners);
            this._dead_players.push(...losers);
            this.setEventPhrases(winners,losers);
        }

        
    }

}