const magicians_names = [
  "Penn and Teller",
  "Jerry Sadowitz",
  "Dynamo",
  "Apollo Robbins",
];

const make_great = (names) => names.map((name) => `Great ${name}`);

const show_magicians = (names) => {
  names.map((name) => console.log(name));
};

const modified_magicians_names = make_great(magicians_names);

show_magicians(modified_magicians_names);
show_magicians(magicians_names);
