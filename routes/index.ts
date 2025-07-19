import { BlogsController } from "@/controllers";
import { authenticatedRoute } from "@/middlewares";
import { router, wrapper } from "./base";

router.get("/blogs", BlogsController.getAllBlogs);
router.get("/:slug", BlogsController.getBlogBySlug);
router.post("/blogs", authenticatedRoute, BlogsController.createBlog);
router.patch("/blogs/:id", authenticatedRoute, BlogsController.updateBlog);
router.delete("/blogs/:id", authenticatedRoute, BlogsController.removeBlog);

export const apiRouter = wrapper(router);
