import { Pokemon } from "./pokemon"
import { AttackOrder } from "./battle"


let charizard = new Pokemon("Charizard", 78, 100, 78, 109, 85, 100);
let pikachu = new Pokemon("Pikachu", 35, 100, 40, 50, 50, 90);
let onix = new Pokemon("Onix", 35, 100, 160, 30, 45, 70);
console.log('Charizard : ', charizard);
console.log('Pikachu created : ', pikachu);

console.log('Which strikes first ? :', AttackOrder.firstStriker(charizard, onix).name);

pikachu.attack(dracaufeu);
console.log('Pikachu attack Dracaufeu');

console.log(pikachu, dracaufeu);