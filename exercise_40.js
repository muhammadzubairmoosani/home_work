const make_album = (name, title, track) => {
  if (track) {
    return { name, title, track };
  } else {
    return { name, title };
  }
};

console.log(make_album("Nirvana", "Nevermind", 3));
console.log(make_album("Bob marley", "Legent"));
