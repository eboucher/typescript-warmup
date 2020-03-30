import { Attack, computeDamage } from "./attack";
import { randomNum } from "./auxFuncs";

export class Pokemon {
    name: string
    HP: number
    level: number
    attackPower: number
    defense: number
    speedAttack: number
    speedDefense: number
    speed: number
    attackList: Attack[]
  
    constructor(name: string, HP: number, attackPower: number, level: number, defense: number,  
                speedAttack: number, speedDefense: number, speed: number, attackList: Attack[]) {
      this.name = name
      this.HP = HP
      this.attackPower = attackPower
      this.level = level
      this.defense = defense
      this.speedAttack = speedAttack
      this.speedDefense = speedDefense
      this.speed = speed
      this.attackList = attackList
    }

    attack(targetPokemon: Pokemon, attack: Attack) {
      let accuracyPokemon = randomNum(101);
      if(attack.acc > accuracyPokemon)
          targetPokemon.HP -= computeDamage(this, targetPokemon, attack);
    }

    hitsMoveOrMisses(attack: Attack): boolean {
      return randomNum(99) <= attack.acc;
    }
  }