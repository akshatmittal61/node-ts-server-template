import { ApiFailure, ApiSuccess } from "@/base";
import { DatabaseManager } from "@/connections";
import { HTTP } from "@/constants";
import { ApiRequest, ApiResponse } from "@/types";

export class ServerController {
	public static health =
		(db: DatabaseManager) => (_: ApiRequest, res: ApiResponse) => {
			if (db.isConnected() === false) {
				return new ApiFailure(res)
					.status(HTTP.status.SERVICE_UNAVAILABLE)
					.message(HTTP.message.DB_CONNECTION_ERROR)
					.send();
			}
			const payload = {
				identity: process.pid,
				uptime: process.uptime(),
				timestamp: new Date().toISOString(),
				database: db.isConnected(),
			};
			return new ApiSuccess(res)
				.message(HTTP.message.HEALTHY_API)
				.data(payload)
				.send();
		};
	public static heartbeat =
		(db: DatabaseManager) => (_: ApiRequest, res: ApiResponse) => {
			const payload = {
				identity: process.pid,
				uptime: process.uptime(),
				timestamp: new Date().toISOString(),
				database: db.isConnected(),
			};
			return new ApiSuccess(res)
				.message(HTTP.message.HEARTBEAT)
				.data(payload)
				.send();
		};
}
