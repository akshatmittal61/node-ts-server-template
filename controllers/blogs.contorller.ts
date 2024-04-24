import { Request, Response } from "express";
import { http } from "../constants/enum";
import log from "../log";
import services from "../services";

export const getAllBlogs = async (_: Request, res: Response) => {
	try {
		const allBlogs = services.blogs.findAll();
		return res
			.status(http.status.SUCCESS)
			.json({ message: http.message.SUCCESS, data: allBlogs });
	} catch (error: any) {
		log.error(error);
		return res
			.status(http.status.INTERNAL_SERVER_ERROR)
			.json({ message: http.message.INTERNAL_SERVER_ERROR });
	}
};
