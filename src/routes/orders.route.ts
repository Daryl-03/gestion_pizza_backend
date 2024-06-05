import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from "../controllers/orders.controller";
import express from "express";

const router = express.Router();

router.get("/", getOrders);

router.get("/:id", getOrder);

router.post("/", createOrder);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

export {
	router
};