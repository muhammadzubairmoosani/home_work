const guest_list = ["Imran Khan", "Zia Khan", "Sattar Edhi"];
guest_list.unshift("Bashir Farooqi");
guest_list.splice(2, 0, "Asad");
guest_list.push("Tariq Jameel");

guest_list.map((guest) => {
  console.log(
    `Hello ${guest}, we are gladly inviting you to join us on 2022-12-05 - 08:00pm as we plan to arrange a delicious dinner party.`
  );
});
