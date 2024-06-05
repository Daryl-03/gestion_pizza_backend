import { model, Schema } from "mongoose";

export const ClientSchema = new Schema(
	{
		name : {
			type : String,
			required: true
		},
		firstname : {
			type : String,
			required: true
		},
	},
	{versionKey: false}
);

export interface Client {
	name: String;
	firstname: String;
}