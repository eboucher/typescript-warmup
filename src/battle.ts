import { Pokemon } from "./pokemon"

export class Battle {
  pokemonA: Pokemon
  pokemonB: Pokemon

  constructor(pokemonA: Pokemon, pokemonB: Pokemon) {
    this.pokemonA = pokemonA
    this.pokemonB  = pokemonB
  }

  export function firstStriker(pokemonA: Pokemon, pokemonB: Pokemon): Pokemon {
    return pokemonA.speed > pokemonB.speed ? pokemonA : pokemonB;
  }

}