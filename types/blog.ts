export type BlogStatus = "DRAFT" | "PUBLISHED";

export type Blog = {
	id: string;
	title: string;
	content: string;
	likes?: number;
	status: BlogStatus;
	createdAt: string;
	updatedAt: string;
};
