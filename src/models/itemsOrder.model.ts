import { model, Schema, Types } from "mongoose";

export const ItemsOrderSchema = new Schema(
	{
	
		name : {
			type : String,
			required: true
		},
		description : {
			type : String,
			required: true
		},
		price : {
			type : Number,
			required: true
		},
		quantity : {
			type : Number,
			required: true
		},
	},
	{versionKey: false}
)

export interface ItemOrder {
	_id: Types.ObjectId;
	name: String;
	description: String;
	price: Number;
	quantity: Number;
}

export const ItemsModel = model(
	"itemsOrder",
	ItemsOrderSchema
);