const mongoose = require("mongoose");
require("dotenv").config();

mongourl = "mongodb+srv://crud:crud@cluster0.lolr9.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("We are connected to Mongo DB Cloud Successfully ");
  })
  .catch(() => {
    console.log("Mongo DB Connection Failed. Hey Check Your DB String ");
  });

  module.exports = mongoose
