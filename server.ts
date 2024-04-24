import express from "express";
import { PORT } from "./config";

const app = express();

app.get("/api/health", (req, res) => {
	return res.status(200).json({ message: "API is healthy" });
});

app.listen(PORT, () =>
	console.info(`Server is listening at http://localhost:${PORT}`)
);
