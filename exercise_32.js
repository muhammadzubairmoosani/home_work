const current_users = ["umair", "zubair", "ASAD", "ali", "Mois", "haris"];
const new_users = ["ahmed", "saad", "asad", "ALI", "zubair", "Haris"];

const findName = () => {
  for (let i = 0; i < current_users.length; i++) {
    for (let j = 0; j < new_users.length; j++) {
      if (
        current_users[i].toLocaleLowerCase() ===
        new_users[j].toLocaleLowerCase()
      ) {
        return false;
      }
    }
  }
  return true;
};

if (findName()) {
  console.log("the username is available.");
} else {
  console.log("the person will need to enter a new username.");
}
