const express = require("express");
const app = express();

app.use(express.json());

const data = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/data/", (request, response) => {
  response.json(data);
});

app.get('/api/data/:id', (request, response) => {
    const id = request.params.id
    const dataPoint = data.find(dataPoint => dataPoint.id == id)
    if (dataPoint) {
        response.json(dataPoint)
      } else {
        response.status(404).end()
      }
  })

app.get("/info/", (request, response) => {
  const time = new Date().toUTCString();
  response.send(
    `<p>Phonebook has info for ${data.length} people</p>
    <p>${time}</p>`
  );
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
