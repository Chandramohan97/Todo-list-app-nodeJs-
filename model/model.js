const mongoose = require("mongoose");

const login = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const signUp = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});
