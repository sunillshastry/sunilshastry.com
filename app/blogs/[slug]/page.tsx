import { getPostBySlug } from '@/lib/mdx';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import mdxRemoteComponents from '@/mdx-components';
import BlogTitle from '@/components/blog-title';
import { BlogMeta } from '@/interfaces/BlogMeta';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShareTab from '@/components/share-tab';

interface FunctionProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({
	params,
}: FunctionProps): Promise<Metadata> {
	const { slug } = await params;

	const { data } = getPostBySlug(slug);

	const title = `${data?.title} | Sunil Shastry`;
	const link = `https://sunilshastry.com/blogs/${data?.slug}`;

	const ogImage = `https://sunilshastry.com/api/og?title=${data?.title}&subtitle=${data?.subtitle}&link=${link}`;

	return {
		title,
		description: data?.description,
		openGraph: {
			images: [
				{
					url: ogImage,
					alt: data?.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description: data?.description,
			creator: '@sunillshastry',
			images: [ogImage],
		},
	};
}

export default async function Page({ params }: FunctionProps) {
	const { slug } = await params;

	let content, data;
	try {
		content = getPostBySlug(slug)?.content;
		data = getPostBySlug(slug)?.data;
	} catch {
		return notFound();
	}

	return (
		<section>
			<Link
				href="/blogs"
				title="Blogs"
				className="group inline-flex items-center justify-start gap-x-1 rounded-full bg-gray-400/25 px-4 py-2 text-sm font-medium"
			>
				<span className="transition group-hover:-translate-x-1">
					<ArrowLeft size={12} />
				</span>
				<span>Blogs</span>
			</Link>

			<article className="mt-10">
				<BlogTitle blog={data as BlogMeta} />
				<ShareTab blog={data as BlogMeta} />

				<div className="mt-8">
					<MDXRemote
						components={mdxRemoteComponents}
						source={content as string}
					></MDXRemote>
				</div>
			</article>
		</section>
	);
}
