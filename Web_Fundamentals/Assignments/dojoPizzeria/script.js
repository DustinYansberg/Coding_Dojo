function pizzaOven(name, crustType, sauceType, cheeses, toppings) {
  let pizza = {};
  pizza.name = name;
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;

  return pizza;
}

let chicago = pizzaOven(
  "Chicago",
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
let veggieDelight = pizzaOven(
  "Veggie Delight",
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
let cluckinDF = pizzaOven(
  "Cluckin' DF",
  "Whole Wheat Garlic",
  "BBQ Sauce",
  ["Dairy-free Cheese"],
  ["chicken", "onion", "pineapple", "jalapenos", "bacon"]
);
let veggieDelightDF = pizzaOven(
  "Veggie Delight DF",
  "hand tossed",
  "marinara",
  ["Dairy-free Cheese"],
  ["mushrooms", "olives", "onions"]
);

function randomPizzaOven(crustType, sauceType, cheeses, toppings) {
  let pizza = {};

  pizza.crustType = random(crustType);
  pizza.sauceType = random(sauceType);
  pizza.cheeses = random(cheeses);
  pizza.toppings = random(toppings);

  return pizza;
}

function random(arr) {
  var max = arr.length;
  return arr[Math.floor(Math.random() * max)];
}

console.log(
  randomPizzaOven(
    ["garlic bread", "whole wheat"],
    ["traditional", "alfredo"],
    ["cheddar", "mozzarella", "dairy-free"],
    ["pepperoni", "jalapenos", "chicken"]
  )
);
