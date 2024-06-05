import { model, Schema, Types } from "mongoose";
import { ClientSchema, Client } from "./clients.model";
import { ItemOrder, ItemsOrderSchema } from "./itemsOrder.model";


const OrderSchema = new Schema(
	{
		number : {
			type : Number,
			required: true
		},
		date : {
			type : Date,
			required: true
		},
		status : {
			type : String,
			required: true
		},
		client : ClientSchema,
		items : [ItemsOrderSchema] 
	},
	{versionKey: false}
);

export interface Order {
	_id: Types.ObjectId;
	number: Number;
	date: Date;
	status: String;
	client: Client;
	items: [ItemOrder];
}

export const OrderModel = model(
	"orders",
	OrderSchema
);