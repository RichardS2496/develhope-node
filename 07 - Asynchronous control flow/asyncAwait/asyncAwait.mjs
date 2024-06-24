import * as fs from "node:fs/promises";

// const contentFile2 = "This is the text of the second file, 2";

// async function outputFile() {
//   try {
//     const file1Data = await fs.readFile("file1.txt", { encoding: "utf-8" });
//     console.log("data:", file1Data);
//     console.log("------------------------------");
//     await fs.writeFile("file2.txt", contentFile2);
//     console.log("the file has been created successfully");
//   } catch (error) {
//     console.error(error);
//   }
// }

// outputFile();

async function togetherFiles() {
  try {
    const allData = await Promise.all([
      fs.readFile("file1.txt", { encoding: "utf-8" }),
      fs.readFile("file2.txt", { encoding: "utf-8" }),
    ]);

    console.log("data:", allData);
  } catch (error) {
    console.error(error);
  }
}

togetherFiles();
