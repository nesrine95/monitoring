"use strict "

const express = require("express");
const paths = require("./routes/paths");

const app = express();
const port = process.env.port || 8080;


app.use(express.json());

app.use("/paths", paths);

app.get("/", (req, res) => {
 
  res.send("/"); 
});
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
app.listen(port, err => {
  if (err) {
    return console.log("error", err);
  }
  console.log(`Listening on port ${port}`)  
})
