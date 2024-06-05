import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { router as ordersRouter } from "./routes/orders.route";
import { router as itemsRouter } from "./routes/items.route";

dotenv.config();

const app = express();
const port = (process.env.PORT) ? parseInt(process.env.PORT) : 5000;
const host = process.env.HOSTNAME || "localhost";

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, 'Connection error :'));
db.once("open", function(){
	console.log("Connected to the database");
});

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.get('/', (req, res) => {
	res.send("Hello world");
});

app.use("/orders", ordersRouter);
app.use('/items', itemsRouter);

app.listen(port, host, () => { 
	console.log(`Server running at http://${host}:${port}/`);
})
