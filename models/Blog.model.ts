import { BLOG_STATUS } from "@/constants";
import mongoose from "mongoose";

export const BlogSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
		content: {
			type: String,
			required: true,
		},
		likes: {
			type: Number,
			default: 0,
		},
		status: {
			type: String,
			enum: Object.values(BLOG_STATUS),
			default: BLOG_STATUS.DRAFT,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
