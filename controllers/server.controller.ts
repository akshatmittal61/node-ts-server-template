import { HTTP } from "../constants";
import { DatabaseManager } from "../db";
import { ApiRequest, ApiResponse } from "../types";

export class ServerController {
	public static async health(_: ApiRequest, res: ApiResponse) {
		try {
			if (DatabaseManager.isReady() === false) {
				throw new Error("Database connection failed");
			}
		} catch {
			return res
				.status(HTTP.status.SERVICE_UNAVAILABLE)
				.json({ message: HTTP.message.DB_CONNECTION_ERROR });
		}
		const payload = {
			identity: process.pid,
			uptime: process.uptime(),
			timestamp: new Date().toISOString(),
		};
		return res
			.status(HTTP.status.SUCCESS)
			.json({ message: HTTP.message.HEALTHY_API, data: payload });
	}
	public static async heartbeat(_: ApiRequest, res: ApiResponse) {
		const payload = {
			identity: process.pid,
			uptime: process.uptime(),
			timestamp: new Date().toISOString(),
			database: DatabaseManager.status(),
		};
		return res
			.status(HTTP.status.SUCCESS)
			.json({ message: HTTP.message.HEARTBEAT, data: payload });
	}
}
