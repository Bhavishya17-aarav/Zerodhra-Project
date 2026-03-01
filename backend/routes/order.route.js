import express from "express";
import { orders } from "../controllers/order.controller.js";

const router = express.Router();

router.route("/order").post(orders);

export default router;   