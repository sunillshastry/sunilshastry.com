import { getAllPosts } from '@/lib/mdx';
import { NextResponse } from 'next/server';

/**
 * Get all blog posts as a GET API request
 *
 * @returns A Response with all the blog posts in a JSON format
 */
export async function GET() {
	const baseBlogsArray = getAllPosts().sort(
		(a, b) =>
			new Date(b?.date as string).getTime() -
			new Date(a?.date as string).getTime()
	);

	// Append the link to the blog post as part of the API response
	const blogs = baseBlogsArray.map(function (blog) {
		return {
			...blog,
			link: `https://sunilshastry.com/blogs/${blog.slug}`,
		};
	});

	return NextResponse.json({
		success: true,
		size: blogs.length,
		data: {
			blogs,
		},
	});
}
