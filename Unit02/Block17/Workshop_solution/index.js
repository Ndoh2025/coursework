//1. Clean the coffee_data.js file.

const coffeeData = require("./Coffee_data.js");
 
   //All prices should be numbers.
   //All items should be strings.
   //Objects and properties should have commas separating them.
   //Connect the coffee_data.js file to the index.js file.

//2. Print an array of all the drinks on the menu.

const drinks = coffeeData.map((drinkObject) => drinkObject.name);


//3. Print an array of drinks that cost 5 and under.

const under5DollarDrinks = coffeeData.filter((drinkObject) => drinkObject.price <= 5);
 

//4. Print an array of drinks that are priced at an even number.

const evenPriceDrinks = coffeeData.filter((drinkObject) => drinkObject.price % 2 === 0);

//5. Print the total if you were to order one of every drink.

const totalPrice = coffeeData.reduce((total, drinkObject) => (total += drinkObject.price),0 );


//6. Print an array with all the drinks that are seasonal.

const seasonalDrinks = coffeeData.filter((drinkObject) => drinkObject.seasonal ===true)


//7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const drinksImported = coffeeData.map((drinkObject) => {
   return drinkObject.name + "with imported beans";
});



// FUNCTIONS

function add (num1, num2) {
   return num1 + num2
}

function calculateSubscription (price) {
   return price / 25 + 10
}
