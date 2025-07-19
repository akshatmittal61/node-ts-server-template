import { Blog } from "../models";
import { CreateModel, UpdateModel } from "../parser";

// Blog
export type CreateBlog = CreateModel<Blog>;
export type UpdateBlog = UpdateModel<Blog>;
