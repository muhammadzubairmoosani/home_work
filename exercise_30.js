const users = ["eric", "admin", "john", "emmy", "mark", "Cornair"];
users.map((user) => {
  if (user.toLocaleLowerCase() === "admin") {
    console.log(`Hello ${user}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
});
