import * as OrderService from '../services/orders.service';
import { Request, Response } from 'express';

export const getOrders = async (req: Request, res: Response) => {
	try {
		const orders = await OrderService.getOrders();
		res.status(200).json(orders);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const getOrder = async (req: Request, res: Response) => {
	try {
		const order = await OrderService.getOrder(req.params.id);
		res.status(200).json(order);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const createOrder = async (req: Request, res: Response) => {
	try {
		const order = await OrderService.createOrder(req.body);
		res.status(201).json(order);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const updateOrder = async (req: Request, res: Response) => {
	try {
		const order = await OrderService.updateOrder(req.params.id, req.body);
		res.status(200).json(order);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteOrder = async (req: Request, res: Response) => {
	try {
		const order = await OrderService.deleteOrder(req.params.id);
		res.status(204).json(order);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};