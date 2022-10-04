const animals = ["dog", "cat", "horse"];
const animalStatements = [
  "is loyal animal.",
  "can jump up to 6 times their height.",
  "can sleep standing up.",
];

animals.map((animal, index) =>
  console.log(`${animal} ${animalStatements[index]}`)
);
