const figlet = require("figlet");
const number = 520215;

figlet(number, { font: "Avatar" }, (err, data) => {
  if (err) {
    console.error("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
