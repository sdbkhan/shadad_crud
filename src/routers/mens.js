const express = require('express');
const { model } = require('mongoose');
const MensRanking = require("../models/mens");
const router = new express.Router();

router.post("/mens", async (req, res) => {
  try {
    const mensRecords = new MensRanking(req.body);
    console.log(mensRecords);
    const insertMens = await mensRecords.save();
    res.status(201).send(insertMens);
  } catch (err) {
    res.status(401).send(err);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    console.log(getMens);
    res.send(getMens);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById({ _id: _id });
    console.log(getMen);
    res.send(getMen);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMens = await MensRanking.findByIdAndUpdate(_id, req.body);
    console.log(updateMens);
    res.send(updateMens);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteMens = await MensRanking.findByIdAndDelete(_id);
    console.log(deleteMens);
    res.send(deleteMens);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;