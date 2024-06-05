import { Types } from "mongoose";
import { OrderModel } from "../models/orders.model";


const getOrders = async () => {
	return await OrderModel.find();
};

const getOrder = async (id: string) => {
	if(!Types.ObjectId.isValid(id)) {
		return null;
	}
	return await OrderModel
		.findById(new Types.ObjectId(id))
		.populate("client")
		.populate("items");
};

const createOrder = async (order: any) => {
	const newOrder = new OrderModel(order);
	await newOrder.save();
	return newOrder;
};

const updateOrder = async (id: string, order: any) => {
	if(!Types.ObjectId.isValid(id)) {
		throw new Error("Invalid id");
	}
	const updatedOrder = await OrderModel.updateOne
		({_id: id}, order);
	if(updatedOrder.modifiedCount === 0) {
		throw new Error("Order not found");
	}
	return {
		...order,
	};
}

const deleteOrder = async (id: string) => {
	if(!Types.ObjectId.isValid(id)) {
		throw new Error("Invalid id");
	}
	const deletedOrder = await OrderModel
		.deleteOne({_id: new Types.ObjectId(id)});
	if(deletedOrder.deletedCount === 0) {
		throw new Error("Order not found");
	}
	return {
		message: "Order deleted"
	};
}

export {
	getOrders,
	getOrder,
	createOrder,
	updateOrder,
	deleteOrder
};