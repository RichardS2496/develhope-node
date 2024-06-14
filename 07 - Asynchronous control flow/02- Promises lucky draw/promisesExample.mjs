import * as fs from "node:fs/promises";

fs.readFile("file.txt", { encoding: "utf-8" })
  .then((data) => console.log("data:", data))
  .then(() => fs.readFile("file2.txt", { encoding: "utf-8" }))
  .then((data2) => console.log("data2:", data2))
  .then(() => fs.readFile("file3.txt", { encoding: "utf-8" }))
  .then((data3) => console.log("data3:", data3))
  .catch((error) => console.error(error));
