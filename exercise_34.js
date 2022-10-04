const pizzas = [
  "Veggie Pizza",
  "Pepperoni Pizza",
  "Meat Pizza",
  "Margherita Pizza",
  "BBQ Chicken Pizza",
];
const pizzasStatement = [
  "I like",
  "I don't like",
  "Vary heavy",
  "Not try yet!",
  "I love",
];
pizzas.map((pizza, index) => console.log(`${pizzasStatement[index]} ${pizza}`));
