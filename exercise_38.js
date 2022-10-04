const describe_city = (city, country = "pakistan") => {
  return `${city} is in ${country}`;
};

console.log(describe_city("karachi"));
console.log(describe_city("lahor"));
console.log(describe_city("islamabad"));
