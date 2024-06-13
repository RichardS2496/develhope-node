import * as fs from "node:fs";

let contentFile = "Este es el contenido de mi archivo";
let rootFile = "./file.txt";

fs.writeFile(rootFile, contentFile, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("El archivo se ha escrito exitosamente");
});
