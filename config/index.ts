import { configService } from "./base";

export const PORT = configService.safeGet(
	() => configService.getNumber("PORT"),
	8000
);

export const dbUri = configService.get("DB_URI");

export const jwtSecret = configService.safeGet(
	() => configService.get("JWT_SECRET"),
	"secret"
);
