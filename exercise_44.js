const sandwichs = [
  "Chicken Sandwich",
  "Egg Sandwich",
  "Seafood Sandwich",
  "Roast Beef Sandwich",
  "Grilled Cheese Sandwich",
];

const orderSummary = [
  {
    price: "$2",
    description: "are commonly eaten for breakfast",
  },
  {
    price: "$4.5",
    description: "are rich in protein",
  },
  {
    price: "$3.5",
    description: "a fish sandwich may be just the thing you need.",
  },
  {
    price: "$2.5",
    description: "it’s great on a Sunday roast",
  },
  {
    price: "$5",
    description: "to get you through the day!",
  },
];

const sandwiches_shop = (orders) => {
  orders.map((order, index) => {
    console.log(
      `${order} ${orderSummary[index].description}.\nPrice: ${orderSummary[index].price}\n`
    );
  });
};

sandwiches_shop(sandwichs);
