import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));

  if (!planet) {
    return res.status(404).json({ error: "Planet not found" });
  }

  res.status(200).json(planet);
});

app.post("/api/planets", (req, res) => {
  const { id, name } = req.body;

  const newPlanet: Planet = { id, name };
  planets = [...planets, newPlanet];

  res.status(201).json({ message: "The planet was added", planet: newPlanet });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
