import mongoose from "mongoose";
import { USER_STATUS } from "../constants";

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

const User = mongoose.model("User", UserSchema);

export default User;
