require('dotenv').config()
const express = require("express");
const app = express();

const port = 3000;
const jsxEngine = require("jsx-view-engine");




const mongoose = require('mongoose')
// connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const Log = require('./models/logs.js')


app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());


// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/logs/new", (req, res) => {
  res.render("New");
});

// Create route
app.post("/logs", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true 
  } else {
    req.body.shipIsBroken = false 
  }
  await Log.create(req.body)
  res.redirect('Show')
} catch(error) {
 console.log(error)
}
})


app.listen(port, () => {
  console.log("Listening to port 3000");
});
