import { T_NODE_ENV } from "../types";
import { configService } from "./base";

export const service = configService.safeGet(
	() => configService.get("SERVICE"),
	"node-ts-server-template"
);

export const PORT = configService.safeGet(
	() => configService.getNumber("PORT"),
	8000
);

export const dbUri = configService.get("DB_URI");

export const jwtSecret = configService.safeGet(
	() => configService.get("JWT_SECRET"),
	"secret"
);

export const nodeEnv = configService.safeGet(
	() => configService.get("NODE_ENV") as T_NODE_ENV,
	"development"
);
