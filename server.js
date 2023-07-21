const express = require("express");
const app = express();
const port = 9090;

app.get("/", function (req, res) {
  res.send("Yay Node!");
});

app.get("/node", function (req, res) {
  let searchQuery = req.query.search;
  res.send("Hello Node" + searchQuery);
});

app.get("/codeyourfuture", function (req, res) {
  let searchQuery = req.query.search;
  res.send("Hello Code Your Future" + searchQuery);
});

app.listen(port, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
