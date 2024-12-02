import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";
import { User } from "../types";
import { genericParse, getNonEmptyString } from "../utils";
import { UserService } from "./user.service";
import { Logger } from "../log";

export class AuthService {
	public static async getAuthenticatedUser(
		token: string
	): Promise<User | null> {
		try {
			const decoded: any = jwt.verify(token, jwtSecret);
			const userId = genericParse(getNonEmptyString, decoded.id);
			const foundUser = await UserService.getUserById(userId);
			return foundUser;
		} catch (error: any) {
			Logger.error(error.message);
			return null;
		}
	}
	public static generateToken(id: string): string {
		return jwt.sign({ id }, jwtSecret, {
			expiresIn: "30d",
		});
	}
}
