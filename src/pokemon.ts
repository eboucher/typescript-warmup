import { Attack } from "./attack";

export class Pokemon {
    name: string
    HP: number
    level: number
    defense: number
    speedAttack: number
    speedDefense: number
    speed: number

    attack(targetPokemon: Pokemon, attack: Attack) {
        let accuracyPokemon = getRandomInt(101);
        if(attack.accuracy > accuracyPokemon)
            targetPokemon.HP -= computeDamage(this, targetPokemon, attack);
    }
  
    constructor(name: string, HP: number, level: number, defense: number, speedAttack: number, 
                speedDefense: number, speed: number) {
      this.name = name
      this.HP = HP
      this.level = level
      this.defense = defense
      this.speedAttack = speedAttack
      this.speedDefense = speedDefense
      this.speed = speed
      this.HP = HP
    }

    // Getters
    getSpeed() {
      this.speed
    }
  }