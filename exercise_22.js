const callError = () => {
  const langs = [
    "english",
    "urdu",
    "memoni",
    undefined,
    "chinese",
    "hindi",
    "german",
  ];

  langs.map((lang) => {
    if (lang === undefined) {
      return new Error(`value is not defined on index: ${lang}`);
    }
    console.log(lang);
  });
};

callError();
