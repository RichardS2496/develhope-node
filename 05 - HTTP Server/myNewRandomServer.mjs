import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(`Request Received`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<html><body><h1>This my page with a random port!</h1></body></html>"
  );
});

server.listen(0, () => {
  console.log(`http://localhost:${server.address().port}`);
});
