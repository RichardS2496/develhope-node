//import neccesary modules

import { createServer } from "node:http";

//create instance of server

const server = createServer((request, response) => {
  console.log("request received");
  //define status code

  response.statusCode = 200;

  //set header

  response.setHeader("Content-Type", "application/json");

  //define response end

  response.end(JSON.stringify({ email: "test@test.com", username: "hola123" }));
});

//start server

server.listen(8080, () => {
  console.log("http://localhost:8080");
});
