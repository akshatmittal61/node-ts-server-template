import { USER_ROLE, USER_STATUS } from "@/constants";
import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			index: {
				unique: true,
				sparse: true,
			},
		},
		username: {
			type: String,
			required: true,
			unique: true,
			index: {
				unique: true,
				sparse: true,
			},
		},
		role: {
			type: String,
			enum: Object.values(USER_ROLE),
			default: USER_ROLE.USER,
		},
		status: {
			type: String,
			enum: Object.values(USER_STATUS),
			default: USER_STATUS.JOINED,
		},
	},
	{
		timestamps: true,
	}
);
