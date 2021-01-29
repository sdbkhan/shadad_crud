const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var mensSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

//Export the model
const MensRanking = new mongoose.model("MensRanking", mensSchema);

module.exports = MensRanking;
