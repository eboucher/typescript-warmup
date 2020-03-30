import { Pokemon } from "./pokemon";

export class Attack {
    basePower: any;
    name: any;
    accuracy: any;
    constructor(name: any, basePower: any, accuracy: any) {
        this.name = name;
        this.basePower = basePower;
        this.accuracy = accuracy;
    }

}

function computeDamage(pokemonAttack: Pokemon, pokemonDefense: Pokemon, attack: Attack) {
    return Math.floor(Math.floor(Math.floor(2 * pokemonAttack.level / 5 + 2) 
                                * pokemonAttack.attack * attack.basePower / pokemonDefense.defense) 
                                / 50) + 2;
}