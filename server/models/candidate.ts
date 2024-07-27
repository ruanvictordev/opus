const mongoose = require("mongoose");
const { Schema } = mongoose;

const candidateSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  phone: String,
  address: String,
  age: Number,
  about: String,
  experience: String,
  formation: String,
  curriculum: String,
  password: String,
});

const CandidateModel = mongoose.model('Candidate', candidateSchema);

module.exports = CandidateModel;
