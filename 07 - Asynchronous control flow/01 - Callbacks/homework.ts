import * as fs from "node:fs";

const contentFile: string = "Este es el nuevo texto generado con TS";
const rootFile: string = "./file.txt";

fs.writeFile(rootFile, contentFile, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("El archivo se ha escrito de forma correcta");
});
