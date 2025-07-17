import { T_BLOG_STATUS, T_USER_ROLE, T_USER_STATUS } from "./enum";
import { Model } from "./parser";

/**
 * User model
 * @param {string} name - Name of the user (optional - defaults to email prefix)
 * @param {string} username - Username of the user (optional - defaults to email prefix)
 * @param {string} email - Email of the user
 * @param {string} role - Role of the user - USER | ADMIN | GUEST
 * @param {string} status - Status of the user - JOINED | INVITED
 */
export type User = Model<{
	name: string;
	username: string;
	email: string;
	role: T_USER_ROLE;
	status: T_USER_STATUS;
}>;

export type Blog = Model<{
	title: string;
	slug: string;
	content: string;
	likes?: number;
	status: T_BLOG_STATUS;
	author: string;
}>;
