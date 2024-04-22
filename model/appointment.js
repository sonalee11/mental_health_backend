const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Appointmentmodel = mongoose.model("appointment", appointmentSchema);
module.exports = Appointmentmodel;
