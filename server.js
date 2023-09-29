const express = require("express");
const app = express();

const port = 3000;
const jsxEngine = require("jsx-view-engine");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/logs/new", (req, res) => {
  res.render("New");
});

// Create route
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true 
  } else {
    req.body.shipIsBroken = false 
  }
  res.send(req.body)
})

app.listen(port, () => {
  console.log("Listening to port 3000");
});
