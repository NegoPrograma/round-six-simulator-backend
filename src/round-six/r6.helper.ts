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

    static fillRemainingPlayers(players: PlayerDTO[]) {
        let totalIncrease = 40 - players.length;
        let npcPlayer: PlayerDTO = <PlayerDTO> {
            name: "NPC",
            imageURL: "https://cf.shopee.com.br/file/9c33e5475f7b2f600a76aba997b90ba7"
        }
        for(let i = 0; i < totalIncrease;i++){
            players.push(npcPlayer);
        }
        return players;
    }
    //static numberOfMiniRounds()
}