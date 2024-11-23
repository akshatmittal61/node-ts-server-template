import { T_BLOG_STATUS, T_USER_STATUS } from "./enum";

export type User = {
	id: string;
	name: string;
	username: string;
	email: string;
	status: T_USER_STATUS;
	createdAt: Date;
	updatedAt: Date;
};

export type Blog = {
	id: string;
	title: string;
	slug: string;
	content: string;
	likes?: number;
	status: T_BLOG_STATUS;
	author: string;
	createdAt: string;
	updatedAt: string;
};

export type IBlog = Omit<Blog, "author"> & {
	author: User;
};
