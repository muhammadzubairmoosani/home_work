const guest_list = ["Imran Khan", "Zia Khan", "Sattar Edhi"];

guest_list.map((guest, index) => {
  if (guest === "Sattar Edhi") {
    console.log(`Sorry ${guest_list[index]} can't join us on dinner`);
    guest_list[index] = "Bashir Farooqi";
  } else {
    console.log(
      `Hello ${guest}, we are gladly inviting you to join us on 2022-12-05 - 08:00pm as we plan to arrange a delicious dinner party.`
    );
  }
});
