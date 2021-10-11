import { PlayerDTO } from "./r6.players.dto";


export class RoundHelper {

    static setNumberOfSurvivors(length: number): number{
        if(length%2 == 0)
            return length/1.1;
    }

    static setIndexLimit(length: number): number{
        if(length%2 == 0)
            return length;
        return length - 1;
    }

    static fillRemainingPlayers(players: PlayerDTO[],max_players_for_this_round) {
        let missingPlayers = max_players_for_this_round - players.length;
        
        for(let i = 0; i < missingPlayers;i++){
            let npcPlayer: PlayerDTO = <PlayerDTO> {
                name: "NPC " + i,
                imageURL: "https://cf.shopee.com.br/file/9c33e5475f7b2f600a76aba997b90ba7"
            }
            players.push(npcPlayer);
        }
        return players;
    }

    static shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    //static numberOfMiniRounds()
}