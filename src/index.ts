import { Pokemon } from "./pokemon"
import { AttackOrder } from "./battle"
import {Attack} from "./attack";


const charizardAttacks = [new Attack("ThunderPunch", 75, 100), 
                          new Attack("Scratch", 40, 100),
                          new Attack("Inferno", 100, 50)]

const pikachuAttacks = [new Attack("ThunderShock", 40, 100), 
                 new Attack("Slam", 80, 75)],
                 new Attack("Feint", 30, 100)]

const onixAttacks = [new Attack("IronTail", 100, 75), 
                     new Attack("Bind", 15, 85)], 
                     new Attack("Double-Edge", 120, 100)]

let charizard = new Pokemon("Charizard", 78, 84, 100, 78, 109, 85, 100, charizardAttacks);
let pikachu = new Pokemon("Pikachu", 35, 55, 100, 40, 50, 50, 90, pikachuAttacks);
let onix = new Pokemon("Onix", 35, 45, 100, 160, 30, 45, 70, onixAttacks);
console.log('Charizard : ', charizard);
console.log('Pikachu created : ', pikachu);

console.log('Which strikes first ? :', AttackOrder.firstStriker(charizard, onix).name);

pikachu.attack(onix, pikachu.attackList[1]);
console.log('Pikachu attacks Onix');

console.log(pikachu, onix);