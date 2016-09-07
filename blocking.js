// add fs object to script
var fs = require('fs');

// open & read food listen
var food = fs.readFileSync('food.txt', 'utf-8');

// print the results to the console
console.log('FOOD: ');
console.log(food);

var drinks = fs.readFileSync('drinks.txt', 'utf-8');
console.log('DRINKS: ');
console.log(drinks);
