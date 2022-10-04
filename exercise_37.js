const make_shirt = (size, text) => {
  if (size.toLocaleLowerCase() === "large")
    console.log(
      `The ${size} of the shirt and the I love JavaScript printed on it.`
    );
  else if (size.toLocaleLowerCase() === "medium") {
    console.log(
      `The ${size} of the shirt and the eat-code-sleep printed on it.`
    );
  } else {
    console.log(`The ${size} of the shirt and the ${text} printed on it.`);
  }
};

make_shirt("x-large", "hello word");
