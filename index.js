const express= require ("express");
const http = require ("http");
const path = require ("path")



const app = express();
const server = http.createServer(app);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}!`);
});




const result = [];

app.use(express.json())

app.use(express.static(path.join(__dirname,  "public")));

app.post("/add", (req, res) => {
  const { value1, value2 } = req.body;
  const answer = value1 + value2;
  const message = `the sum is ${answer}`;
  result.push;
  res.send({ message });
});

app.post("/sub", (req, res) => {
  const { value1, value2 } = req.body;
  const answer = value1 - value2;
  const message = `the difference is ${answer}`;
  result.push;
  res.send({ message });
});

app.post("/mul", (req, res) => {
  const { value1, value2 } = req.body;
  const answer = value1 * value2;
  const message = `the multiplication is ${answer}`;
  result.push;
  res.send({ message });
});

app.post("/div", (req, res) => {
  const { value1, value2 } = req.body;
  const answer = value1 / value2;
  const message = `the division is${answer}`;
  result.push;
  res.send({ message });
});

app.get("/getAll", (req, res) => {
  res.send({ result });
});



