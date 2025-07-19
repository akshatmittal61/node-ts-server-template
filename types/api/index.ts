import { User } from "@/types/models";
import { Request, Response } from "express";

export * as ApiRequests from "./requests";
export * as ApiResponses from "./responses";

export type ApiRequest = Request & { user?: User };

export type ApiResponse = Response;

export type ApiRes<T> = { message: string; data: T };

export type Cookie = {
	name: string;
	value: string;
	maxAge: number;
};
