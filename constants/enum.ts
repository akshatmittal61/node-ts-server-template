import { T_BLOG_STATUS, T_USER_STATUS } from "../types";
import { getEnumeration } from "../utils";

export const USER_STATUS = getEnumeration<T_USER_STATUS>(["INVITED", "JOINED"]);
export const BLOG_STATUS = getEnumeration<T_BLOG_STATUS>([
	"DRAFT",
	"PUBLISHED",
	"ARCHIVED",
]);
