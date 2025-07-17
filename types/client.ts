import { Blog, User } from "./models";

export type IBlog = Omit<Blog, "author"> & {
	author: User;
};
