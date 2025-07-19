import { Blog, User } from "@/types";
import { ModelFactory } from "./base";
import { BlogSchema } from "./Blog.model";
import { UserSchema } from "./User.model";

export const UserModel = new ModelFactory<User>("User", UserSchema).model;
export const BlogModel = new ModelFactory<Blog>("Blog", BlogSchema).model;
