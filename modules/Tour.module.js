const mongoose = require("mongoose");
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please enter a product name"],
      trim: true,
      unique: [true, "name is unique required"],
      minLength: [3, "minimum length is 3"],
      maxLength: [100, "maximum length is 100"],
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    image: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: [true, "please enter price"],
      min: [0, "Price can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "price must be integer",
    },
    discount: {
      type: Number,
      require: true,
      validate: {
        validator: (value) => {
          const number = Number.isInteger(value);
          if (number) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "discount must be integer",
    },
    travel: {
      type: String,
      require: [true, "Please Enter Traveler Type"],
      enum: {
        values: ["bus", "train"],
        message: "travel value can't be {VALUES}, must be bus/train",
      },
    },
    from: {
      type: String,
      require: true,
    },
    to: {
      type: String,
      require: true,
    },
    tag: {
      type: String,
      require: true,
      enum: {
        values: ["bus", "train", "air"],
        message: "travel value can't be {VALUES}, must be bus/train/air",
      },
    },
    view: Number,
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
