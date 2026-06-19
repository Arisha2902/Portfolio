const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  github: {
    type: String,
  },

  liveDemo: {
    type: String,
  },

  technologies: [String],
});

module.exports = mongoose.model("Project", projectSchema);