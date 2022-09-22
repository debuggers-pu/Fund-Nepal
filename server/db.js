const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI);
    if (connect) {
      console.log("connected to database successfully");
    }
  } catch (error) {
    console.log(error);
    console.log("Could not connect to database!");
  }
};
