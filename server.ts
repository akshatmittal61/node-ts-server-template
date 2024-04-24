import { PORT } from "./config";
import express from "express";
import { db } from "./db";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_, res) => {
	return res.status(200).json({ message: "API is healthy" });
});

app.use("/api/v1", routes);

app.listen(PORT, () => {
	db.connect();
	console.info(`Server is listening at http://localhost:${PORT}`);
});
