const crypto = require("node:crypto");

const getRandomID = crypto.randomUUID();

console.log(getRandomID);

//hasta este punto 👆 ya se ha resuelto el ejercicio
console.log("------------------------------");
//probando...

const fixedId = getRandomID.split("-").join("");

console.log(fixedId);
