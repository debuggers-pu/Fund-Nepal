const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      enum: ["Medical", "Tech", "Education", "General"],
      default: "General",
    },
    amount: {
      type: Number,
      default: 20000,
    },
    amountCollected: {
      type: Number,
      default: 0,
    },
    comment: {
      map: [
        {
          userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          value: [String],
        },
      ],
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// { userID : string}

module.exports = mongoose.model("Post", postSchema);
