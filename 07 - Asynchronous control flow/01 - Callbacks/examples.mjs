// console.log("1. Hola");

// setTimeout(() => {
//   console.log("2. Todo ok");
// }, 2000);

// console.log("3. Bye");

import * as fs from "node:fs";

fs.readFile("file-0.txt", { encoding: "utf-8" }, (error, data) => {
  if (error) {
    console.error(error);
    return;
  } else {
    console.log(data);
  }
});
