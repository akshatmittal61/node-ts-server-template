export type CacheParameter = "USER" | "BLOG";
export type CachePayloadGenerator<T extends CacheParameter> = T extends "USER"
	? { id: string }
	: T extends "BLOG"
		? { id: string }
		: never;
