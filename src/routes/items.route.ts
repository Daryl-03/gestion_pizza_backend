import express from "express";
import * as ItemController from "../controllers/items.controller";

const router = express.Router();

router.get("/", ItemController.getItems);

router.get("/:id", ItemController.getItem);

router.post("/", ItemController.createItem);

router.put("/:id", ItemController.updateItem);

router.delete("/:id", ItemController.deleteItem);

export {router};