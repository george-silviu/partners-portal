const express = require("express");
const PORT = 3003;

const app = express();

app.get("/", (req, res) => {
  return res.send("Hi there! I am your partners portal!");
});

const server = app.listen(PORT, () => {
  const host =
    server.address().address === "::" ? "localhost" : server.address().address;
  const port = server.address().port;

  console.log(`API listens for requests at http://${host}:${port}`);
});
