import mongoose from "mongoose";
import { USER_STATUS } from "../constants";
import { User } from "../types";

const UserSchema = new mongoose.Schema(
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

export const UserModel = mongoose.model<User>("User", UserSchema);
