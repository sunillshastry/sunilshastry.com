import BlogHeader from '@/components/blog-header';
import type { Metadata } from 'next';
interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

export const metadata: Metadata = {
	title: 'Blogs | Sunil Shastry | University of Saskatchewan',
};

export default function Layout({ children }: FunctionProps) {
	return (
		<section className="mx-auto w-1/2 pt-14 pb-8 max-lg:w-[90%]">
			<BlogHeader />
			<div className="mt-8">{children}</div>
		</section>
	);
}
