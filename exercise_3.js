let person_name = "zubair moosani";
function titleCase(string) {
  let sentence = string.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
}
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(titleCase(person_name));
