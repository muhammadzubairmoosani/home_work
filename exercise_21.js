let list = {};
const langs = [
  "english",
  "urdu",
  "memoni",
  "japanies",
  "chinese",
  "hindi",
  "german",
];

const storeItems = (key, item) => {
  list = { ...list, [key]: item };
};

langs.map((lang, index) => storeItems(`lang${index + 1}`, lang));
console.log(list);
