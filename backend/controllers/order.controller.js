import { Holding } from "../models/holdings.model.js";
import { Order } from "../models/orders.model.js";

export const orders = async(req, res) => {
  try {
    const { stock, quantity, price, type } = req.body;
    // 🔹 1. Validation
    if (!stock || !quantity || !price || !type) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 🔹 2. Business Logic
    if (quantity <= 0) {
      return res.status(400).json({
        message: "Quantity must be greater than 0",
      });
    }

    // 🔹 3. Save to Database
    const newOrder = new Order({
      stock,
      quantity,
      price,
      type,
    });

    await newOrder.save();
    // when stock is Buy so Holdind is increasing

    if (type === "BUY") {

  let existingHolding = await Holding.findOne({ name: stock });

  if (existingHolding) {

    const totalCost =
      existingHolding.qty * existingHolding.avg +
      quantity * price;

    const totalQty = existingHolding.qty + quantity;

    existingHolding.avg = totalCost / totalQty;
    existingHolding.qty = totalQty;
    existingHolding.price = price;

    await existingHolding.save();

  } else {

    await Holding.create({
      name: stock,
      qty: quantity,
      avg: price,
      price: price,
      net: "0%",
      day: "0%"
    });
  }
}

// when stock is sell so Holdind is decreasing

if (type === "SELL") {

  let existingHolding = await Holding.findOne({ name: stock });

  if (!existingHolding) {
    return res.status(400).json({
      message: "Stock not found in holdings"
    });
  }

  if (existingHolding.qty < quantity) {
    return res.status(400).json({
      message: "Not enough quantity"
    });
  }

  existingHolding.qty -= quantity;
  existingHolding.price = price;

  if (existingHolding.qty === 0) {
    await Holding.deleteOne({ name: stock });
  } else {
    await existingHolding.save();
  }
}
    // 🔹 4. Send Response
    res.status(201).json({
      message: `${type} order placed successfully`,
      order: newOrder,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
}