//Entry point for the app
const app = require("express")();
require("dotenv").config();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server working"); // testing whether the server is working.
});
