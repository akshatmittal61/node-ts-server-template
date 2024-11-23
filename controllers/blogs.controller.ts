import { BLOG_STATUS, HTTP } from "../constants";
import { BlogService } from "../services";
import { ApiRequest, ApiResponse, Blog, T_BLOG_STATUS } from "../types";
import {
	genericParse,
	getNonEmptyString,
	getString,
	safeParse,
} from "../utils";

export class BlogsController {
	public static async getAllBlogs(_: ApiRequest, res: ApiResponse) {
		const publishedBlogs = BlogService.getAllPublishedBlogs();
		return res
			.status(HTTP.status.SUCCESS)
			.json({ message: HTTP.message.SUCCESS, data: publishedBlogs });
	}

	public static async getBlogBySlug(req: ApiRequest, res: ApiResponse) {
		const slug = getString(req.params.slug);
		const blog = await BlogService.getBlogBySlug(slug);
		if (!blog) {
			return res
				.status(HTTP.status.NOT_FOUND)
				.json({ message: HTTP.message.NOT_FOUND });
		}
		return res
			.status(HTTP.status.SUCCESS)
			.json({ message: HTTP.message.SUCCESS, data: blog });
	}

	public static async createBlog(req: ApiRequest, res: ApiResponse) {
		const title = genericParse(getNonEmptyString, req.body.title);
		const slug = genericParse(getNonEmptyString, req.body.slug);
		const content = genericParse(getNonEmptyString, req.body.content);
		const author = genericParse(getNonEmptyString, req.user?.id);
		const status =
			safeParse(getString<T_BLOG_STATUS>, req.body.status) ||
			BLOG_STATUS.DRAFT;
		const blog = await BlogService.createBlog({
			title,
			slug,
			content,
			author,
			status,
		});
		return res
			.status(HTTP.status.CREATED)
			.json({ message: HTTP.message.SUCCESS, data: blog });
	}

	public static async updateBlog(req: ApiRequest, res: ApiResponse) {
		const blogId = genericParse(getNonEmptyString, req.params.id);
		const currentUserId = genericParse(getNonEmptyString, req.user?.id);
		const title = safeParse(getNonEmptyString, req.body.title);
		const content = safeParse(getNonEmptyString, req.body.content);
		const status = safeParse(getString<T_BLOG_STATUS>, req.body.status);
		const body: Partial<Omit<Blog, "id" | "author">> = {};
		if (title) body["title"] = title;
		if (content) body["content"] = content;
		if (status) body["status"] = status;
		const blog = await BlogService.updateBlog({
			blogId,
			currentUserId,
			body,
		});
		return res
			.status(HTTP.status.SUCCESS)
			.json({ message: HTTP.message.SUCCESS, data: blog });
	}

	public static async removeBlog(req: ApiRequest, res: ApiResponse) {
		const blogId = genericParse(getNonEmptyString, req.params.id);
		const currentUserId = genericParse(getNonEmptyString, req.user?.id);
		const blog = await BlogService.removeBlog({ blogId, currentUserId });
		return res
			.status(HTTP.status.REMOVED)
			.json({ message: HTTP.message.SUCCESS, data: blog });
	}
}
