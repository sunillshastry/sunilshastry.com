import BackTop from '@/components/back-top';
import BlogHeader from '@/components/blog-header';
import ViewAsApi from '@/components/view-as-api';
import type { Metadata } from 'next';
interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

export const metadata: Metadata = {
	title: 'Blogs | Sunil Shastry | University of Saskatchewan',
};

export default function Layout({ children }: FunctionProps) {
	return (
		<section className="relative mx-auto w-1/2 pt-14 pb-8 max-lg:w-[90%]">
			<BlogHeader />
			<ViewAsApi />
			<div className="mt-6">{children}</div>
			<BackTop />
		</section>
	);
}
