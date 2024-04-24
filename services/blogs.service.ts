import models from "../models";

export const findAll = async () => {
	const blogs = await models.Blog.find({});
	return blogs;
};
