/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let rand = Math.random();
let first, second, third;

// first
if (rand < 0.33) {
  first = "Crazy";
} else if (rand > 0.33 && rand < 0.66) {
  first = "Amazing";
} else first = "Fire";

rand = Math.random();

//Second
if (rand < 0.33) {
  second = "Engine";
} else if (rand > 0.33 && rand < 0.66) {
  second = "Food";
} else second = "Garments";

rand = Math.random();

// third
if (rand < 0.33) {
  third = "Bros";
} else if (rand > 0.33 && rand < 0.66) {
  third = "Limited";
} else third = "Hub";

console.log(`Your Buisness Name Is:${first} ${second} ${third}  `);
