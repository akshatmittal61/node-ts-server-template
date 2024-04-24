import controllers from "../controllers";
import { Router } from "express";

const router = Router();

router.route("/").get(controllers.blogs.getAllBlogs);

export default router;
