import { NextFunction, Request, Response } from "express";
import { HTTP } from "../constants";
import { logger } from "../log";

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.headers.authorization?.split("Bearer ")[0];
		if (!token) {
			return res
				.status(HTTP.status.UNAUTHORIZED)
				.json({ message: HTTP.message.UNAUTHORIZED });
		}
		next();
	} catch (error: any) {
		logger.error(error);
		return res
			.status(HTTP.status.UNAUTHORIZED)
			.json({ message: HTTP.message.UNAUTHORIZED });
	}
};
