import { Pokemon } from "./pokemon";


export class Attack {
    name: string;
    power: number;
    acc: number;

    constructor(name: string, power: number, acc: number) {
        this.name = name;
        this.power = power;
        this.acc = acc;
    }
}

export function computeDamage(attackingPokemon: Pokemon, pokemonDefense: Pokemon, attack: Attack) {
    return Math.floor(Math.floor(Math.floor(2 * attackingPokemon.level / 5 + 2) 
                                * attackingPokemon.attackPower * attack.power / pokemonDefense.defense) 
                                / 50) + 2;
}