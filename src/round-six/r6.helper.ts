

export class RoundHelper {

    static setNumberOfSurvivors(length: number): number{
        if(length%2 == 0)
            return length/2;
        return length/2+1;
    }

    static setIndexLimit(length: number): number{
        if(length%2 == 0)
            return length;
        return length - 1;
    }
}