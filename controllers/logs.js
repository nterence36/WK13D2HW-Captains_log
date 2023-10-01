const express = require("express");
const router = express.Router();
const Log = require("../models/logs.js");

// seed route
router.get('/seed', async (req, res)=>{
  try {
      await Log.create([
      {
          title:'Harsh Weather',
          entry:'Due to harsh weather, captain could not navigate faster',
          shipIsBroken:false
      },
      {
          title:'Collision',
          entry:'Captain collide with another boat that cause many to sink',
          shipIsBroken:true
      },
      {
          title:'ship staff shortage',
          entry:'Due to shortage of ship/s staff the was no appropriate placement of bagage',
          shipIsBroken:false
      }
  ])
      res.redirect('/logs')
  } catch (error) {
      console.error(error)
    }
});
// Index route
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find();
    res.render("Index", { logs: logs });
  } catch (error) {
    console.error(error);
  }
});

// New route
router.get("/new", (req, res) => {
  res.render("New");
});

// Delete route
router.delete("/:id", async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id);
    res.redirect("/logs");
  } catch (error) {
    console.log(error);
  }
});

// Update route
router.put("/:id", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") {
      
      req.body.shipIsBroken = true; 
    } else {
      
      req.body.shipIsBroken = false; 
    }
    // fruits.push(req.body);
    await Log.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/logs");
  } catch (error) {
    console.log(error);
  }
});

// Create route
router.post("/", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    await Log.create(req.body);
    res.render("Show", { log: req.body });
  } catch (error) {
    console.log(error);
  }
});

// Edit route
router.get("/:id/edit", async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    res.render("Edit", { log: foundLog });
  } catch (error) {
    console.log(Error);
  }
});

// Show route
router.get("/:id", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render("Show", { log: log });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
