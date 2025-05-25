const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Facing Some Error", error);
  } else {
    console.log("Server Running at PORT:", PORT);
  }
});
