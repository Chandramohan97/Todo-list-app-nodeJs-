const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const signUpSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  mobileNo: { type: Number, required: true, unique: true },
});

const Login = mongoose.model("Login", login);
const signUp = mongoose.model("signUpSchema", signUpSchema);

module.exports = {
  Login,
  signUp,
};
