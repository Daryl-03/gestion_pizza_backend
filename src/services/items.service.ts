import { Types } from "mongoose";
import { ItemStock, ItemsModel } from "../models/itemsStock.model";

const getItems = async () => {
	console.log("getItems");
	
	  return await ItemsModel.find();
};

const getItem = async (id: string) => {
	{
		if(!Types.ObjectId.isValid(id)) {
			return null;
		}
	}
	return await ItemsModel.findById(new Types.ObjectId(id));
};

const createItem = async (item: ItemStock) => {
	const newItem = new ItemsModel(item);
	await newItem.save();
	return newItem;
};

const updateItem = async (id: string, item: ItemStock) => {
	const updatedItem = await ItemsModel.updateOne({_id: new Types.ObjectId(id)}, item);
	if(updatedItem.modifiedCount === 0) {
		throw new Error("Item not found");
	} else {
		return {
			...item,
		};
	}
};

const deleteItem = async (id: string) => {
	if(!Types.ObjectId.isValid(id)) {
		throw new Error("Invalid id");
	}
	const deletedItem = await ItemsModel.deleteOne({_id: new Types.ObjectId(id)});
	if(deletedItem.deletedCount === 0) {
		throw new Error("Item not found");
	} else {
		return {
			message: "Item deleted"
		};
	}
};

export {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem
};