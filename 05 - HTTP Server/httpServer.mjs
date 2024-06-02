import { createServer } from "node:http";

const port = 3000;

const server = createServer((request, response) => {
  console.log(`Request Received`);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(
    "<html><body><h1>This is my first server with Node</h1></body></html>"
  );
});

server.listen(port, () => {
  console.log(`Server listening in Port : http://localhost:${port}`);
});
