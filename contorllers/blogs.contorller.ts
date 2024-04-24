import services from "../services";
import { Request, Response } from "express";

export const getAllBlogs = async (_: Request, res: Response) => {
	try {
		const allBlogs = services.blogs.findAll();
		return res.status(200).json({ message: "Success", data: allBlogs });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};
