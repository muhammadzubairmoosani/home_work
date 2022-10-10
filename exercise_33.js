const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ordinals = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

for (let i = 0; i < numbers.length; i++) {
  console.log(`${numbers[i]}${ordinals[i]}`);
}
