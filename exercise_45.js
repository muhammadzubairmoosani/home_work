const show_car_information = (object) => {
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
};

show_car_information({
  manufacturer: "Toyota Motor Corporation",
  name: "carolla",
  modal: "2022",
  color: "black",
  condition: "new",
});
