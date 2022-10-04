const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const createOrdinalNumbers = (array) => {
  return array.map((number) => `${number}th`);
};

console.log(createOrdinalNumbers(numbers));
