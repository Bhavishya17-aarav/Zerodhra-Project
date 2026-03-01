import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  stock: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
  type: Number,
  required: true,
  },
  type: {
    type: String,
    enum: ["BUY", "SELL"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
   }
});

export const Order = mongoose.model("Order", orderSchema);
