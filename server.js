require('dotenv').config()
const express = require("express");
const app = express();

const port = 3000;
const jsxEngine = require("jsx-view-engine");

const methodOverride = require('method-override')

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
app.use(methodOverride('_method'))

// Index route
app.get("/logs/", async (req, res) => {
  try {
    const logs = await Log.find();
    res.render("Index", {logs: logs});
  } catch(error) {
    console.error(error);
  }
 });

// New route
app.get("/logs/new", (req, res) => {
  res.render("New");
});

// Delete route
app.delete('/logs/:id', async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id)
  res.redirect('/logs')
  } catch(error){
    console.log(error)
  }
})

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

// Show route
app.get('/logs/:id', async (req, res) => {
  const log = await Log.findById(req.params.id)
   res.render('Show', {log: log})
})

app.listen(port, () => {
  console.log("Listening to port 3000");
});
