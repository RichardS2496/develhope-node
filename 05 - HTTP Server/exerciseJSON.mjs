import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(`Request Received`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const jsonResponseBody = JSON.stringify({
    id: 195,
    name: "Kristen Stewart",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    origin: {
      name: "Earth (C-500A)",
      url: "https://rickandmortyapi.com/api/location/23",
    },
    location: {
      name: "Mars",
      url: "https://rickandmortyapi.com/api/location/23",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/8"],
    url: "https://rickandmortyapi.com/api/character/195",
    created: "2017-12-30T12:19:16.042Z",
  });
  res.end(jsonResponseBody);
});

server.listen(0, () => {
  console.log(`http://localhost:${server.address().port}`);
});
