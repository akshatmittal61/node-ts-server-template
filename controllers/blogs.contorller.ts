import { http } from "../constants/enum";
import services from "../services";
import { Request, Response } from "express";

export const getAllBlogs = async (_: Request, res: Response) => {
	try {
		const allBlogs = services.blogs.findAll();
		return res
			.status(http.status.SUCCESS)
			.json({ message: http.message.SUCCESS, data: allBlogs });
	} catch (error) {
		console.error(error);
		return res
			.status(http.status.INTERNAL_SERVER_ERROR)
			.json({ message: http.message.INTERNAL_SERVER_ERROR });
	}
};
