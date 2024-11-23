import { NextFunction } from "express";
import { HTTP } from "../constants";
import { logger } from "../log";
import { AuthService } from "../services";
import { ApiRequest, ApiResponse } from "../types";

export const authenticatedRoute = async (
	req: ApiRequest,
	res: ApiResponse,
	next: NextFunction
) => {
	try {
		const token = req.headers.authorization?.split("Bearer ")[0];
		if (!token) {
			return res
				.status(HTTP.status.UNAUTHORIZED)
				.json({ message: HTTP.message.UNAUTHORIZED });
		}
		const loggedInUser = await AuthService.getAuthenticatedUser(token);
		if (!loggedInUser) {
			return res
				.status(HTTP.status.UNAUTHORIZED)
				.json({ message: "Please login to continue" });
		}
		logger.debug("loggedInUser", loggedInUser);
		req.user = loggedInUser;
		return next();
	} catch (error: any) {
		logger.error(error);
		return res
			.status(HTTP.status.UNAUTHORIZED)
			.json({ message: HTTP.message.UNAUTHORIZED });
	}
};
