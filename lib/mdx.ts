import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogMeta } from '@/interfaces/BlogMeta';
import { BlogPost } from '@/interfaces/BlogPost';

const postsDir = path.join(process.cwd(), 'content/');

export function getAllPosts() {
	const files = fs.readdirSync(postsDir);

	return files.map((filename) => {
		const filePath = path.join(postsDir, filename);
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { data } = matter(fileContent);

		const blog: BlogMeta = {
			...data,
			slug: data.slug || (filename.replace(/\.mdx?$/, '') as string),
		};

		return blog;
	});
}

export function getPostBySlug(slug: string) {
	const fullPath = path.join(postsDir, `${slug}.mdx`);
	const fileContent = fs.readFileSync(fullPath, 'utf-8');
	const post: BlogPost = matter(fileContent);

	return post;
}
