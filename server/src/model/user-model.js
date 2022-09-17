const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    hashPassword: {
      type: String,
      required: true,
      min: 4,
    },
    address: {
      type: String,
      trim: true,
      lowercase: true,
    },
    contactNumber: {
      type: Number,
      unique: true,
      trim: true,
    },
    profilepic: {
      type: String,
      default : "myimg.jpg"
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("password").set(function (password) {
  this.hashPassword = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compareSync(password, this.hashPassword);
  },
 
};

module.exports = mongoose.model("User", userSchema);