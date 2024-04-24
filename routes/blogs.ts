import controllers from "../contorllers";
import { Router } from "express";

const router = Router();

router.route("/").get(controllers.blogs.getAllBlogs);

export default router;
