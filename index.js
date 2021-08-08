const express = require("express");

const user = { name: "ELai" };

const app = express();

user.email = "nitai@gmail.com";

app.get("/nitai", function (req, res) {
  res.send(user);
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
