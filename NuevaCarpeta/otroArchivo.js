// import fs

const fs = require("fs");

// fs.appendFile("file.txt", "\n\n\n here are more spaces", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Everything is ok!");
//   }
// });

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
