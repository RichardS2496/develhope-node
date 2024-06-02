import figlet from "figlet";

figlet("Hello, my friend!", (err, data) => {
  if (err) {
    console.error(`An error found: ${err}`);
    return;
  } else {
    console.log(data);
  }
});
