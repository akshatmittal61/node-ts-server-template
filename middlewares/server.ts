import { default as corsMiddleware } from "cors";
import { NextFunction } from "express";
import { HTTP } from "../constants";
import { DatabaseManager } from "../db";
import { logger } from "../log";
import { ApiRequest, ApiResponse } from "../types";

export const parseCookies = (
	req: ApiRequest,
	_: ApiResponse,
	next: NextFunction
) => {
	const cookie: typeof req.cookies = {};
	const list = req.headers.cookie?.split(";") || [];
	for (const item of list) {
		const parts = item.split("=");
		const key = parts.shift()?.trim() || "";
		if (!key) continue;
		const value = decodeURIComponent(parts.join("="));
		cookie[key] = value;
	}
	req.cookies = cookie;
	return next();
};

export const cors = corsMiddleware({
	origin: "*",
});

export const useDb = (_: ApiRequest, res: ApiResponse, next: NextFunction) => {
	if (DatabaseManager.isReady() === false) {
		return res
			.status(HTTP.status.SERVICE_UNAVAILABLE)
			.json({ message: HTTP.message.DB_CONNECTION_ERROR });
	}
	return next();
};

export const tracer = (req: ApiRequest, _: ApiResponse, next: NextFunction) => {
	logger.debug(req.method, req.path, req.params, req.body, req.headers);
	return next();
};

export const profiler = (
	req: ApiRequest,
	res: ApiResponse,
	next: NextFunction
) => {
	const start = process.hrtime(); // Use high-resolution timer

	res.on("finish", () => {
		const end = process.hrtime(start);
		const elapsed = (end[0] * 1e9 + end[1]) / 1e6; // Convert to milliseconds
		logger.debug(
			`Request: ${req.method} ${req.originalUrl} took ${elapsed}ms`
		);
	});

	return next();
};
