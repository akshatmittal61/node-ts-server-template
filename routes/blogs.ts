import { Router } from "express";
import controllers from "../controllers";

const router = Router();

router
	.route("/")
	.get(controllers.blogs.getAllBlogs)
	.post(controllers.blogs.createBlog);
router
	.route("/:id")
	.get(controllers.blogs.getBlogById)
	.patch(controllers.blogs.updateBlog)
	.delete(controllers.blogs.removeBlog);

export default router;
