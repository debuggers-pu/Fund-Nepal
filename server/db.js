const mongoose = require("mongoose");

module.exports = async () => {
  const connectionParams = {};
  try {
    const connect = await mongoose.connect(
      process.env.DB_URI,
      connectionParams
    );
    if (connect) {
      console.log("connected to database successfully");
    }
  } catch (error) {
    console.log(error);
    console.log("Could not connect to database!");
  }
};
