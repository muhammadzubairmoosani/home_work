const guest_list = ["Imran Khan", "Zia Khan", "Sattar Edhi"];
guest_list.unshift("Bashir Farooqi");
guest_list.splice(2, 0, "Asad");
guest_list.push("Tariq Jameel");

console.log("Sorry gentleman we're invite only two people for dinner.");

for (let i = 0; guest_list.length; i++) {
  if (guest_list.length > 2) {
    console.log(`Sorry ${guest_list.pop()} I can’t invite you to dinner`);
  } else {
    console.log(`${guest_list.pop()} you’re still invited`);
  }
  if (!guest_list.length) console.log(guest_list);
}
