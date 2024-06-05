import { log } from 'console';
import * as ItemService from '../services/items.service';
import { Request, Response } from 'express';

export const getItems = async (req: Request, res: Response) => {
	try {
		console.log("controller getItems");
		
		const items = await ItemService.getItems();
		res.status(200).json(items);
	} catch (error: any) {
		console.log("controller getItems");
		res.status(500).json({ message: error.message+ "controller getItems"});
	}
};

export const getItem = async (req: Request, res: Response) => {
	try {
		console.log(parseInt(req.params.id));
		
		const item = await ItemService.getItem(req.params.id);
		console.log(item);
		
		res.status(200).json(
			item? item : { message: "Item not found" }
		);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const createItem = async (req: Request, res: Response) => {
	try {
		const item = await ItemService.createItem(req.body);
		res.status(201).json(item);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const updateItem = async (req: Request, res: Response) => {
	try {
		const item = await ItemService.updateItem(req.params.id, req.body);
		res.status(200).json(item);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteItem = async (req: Request, res: Response) => {
	try {
		const item = await ItemService.deleteItem(req.params.id);
		res.status(204).json(item);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};