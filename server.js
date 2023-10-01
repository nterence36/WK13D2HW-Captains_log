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
  const logControllers =require('./controllers/logs.js')


app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());


// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))

// Controler
app.use('/logs', logControllers)


app.listen(port, () => {
  console.log("Listening to port 3000");
});
