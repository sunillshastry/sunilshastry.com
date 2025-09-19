import NoBlogPosts from '@/components/no-blog-posts';
import { getAllPosts } from '@/lib/mdx';
import getFormattedDate from '@/utils/get-formatted-date';
import getFormattedMonth from '@/utils/get-formatted-month';
import getYear from '@/utils/get-year';
import nameShorthand from '@/utils/name-shorthand';
import Link from 'next/link';

export default function Page() {
	const unsortedBlogs = getAllPosts();
	const blogs = unsortedBlogs.sort(
		(a, b) =>
			new Date(b?.date as string).getTime() -
			new Date(a?.date as string).getTime()
	);

	if (blogs.length === 0) {
		return <NoBlogPosts />;
	}

	return (
		<>
			<div className="mt-2">
				{blogs.map(function (blog) {
					const year = getYear(blog.date as string);
					const date = getFormattedDate(blog.date as string);
					const month = getFormattedMonth(blog.date as string);

					const monthShorthand = nameShorthand(month);

					return (
						<Link
							href={`/blogs/${blog?.slug}`}
							key={blog?.slug}
							title={blog?.title}
							prefetch={true}
						>
							<div className="ease flex w-full items-center justify-between rounded-md p-4 transition hover:bg-gray-400/25 max-lg:flex-col max-lg:items-start">
								<div className="flex items-center max-lg:flex-col max-lg:items-start">
									<h4 className="font-mono text-xs font-medium">
										<span className="max-lg:hidden lg:inline-block">
											{monthShorthand}
										</span>{' '}
										<span className="hidden max-lg:inline-block">{month}</span>{' '}
										{date}, {year}
									</h4>
									<div className="ml-4 max-lg:mt-2 max-lg:ml-0">
										<h4 className="text-sm font-semibold">{blog?.title}</h4>
										<p className="mt-1 inline-block font-mono text-xs italic">
											{(blog?.subtitle?.length as number) > 54
												? `${blog?.subtitle?.slice(0, 55)}...`
												: blog?.subtitle}
										</p>
									</div>
								</div>

								<div>
									<h4 className="font-mono text-xs max-lg:mt-4">
										{blog?.duration}
									</h4>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
}
