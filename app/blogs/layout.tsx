import BackButton from '@/components/back-button';
import BackTop from '@/components/back-top';
import BlogHeader from '@/components/blog-header';
import ViewAsApi from '@/components/view-as-api';
import type { Metadata } from 'next';
interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

export const metadata: Metadata = {
	title: 'Blogs | Sunil Shastry | Software Engineer',
};

export default function Layout({ children }: FunctionProps) {
	return (
		<section className="relative">
			<BackButton
				href="/"
				title="Home"
				className="absolute top-6 left-0 z-20 max-lg:top-4 max-lg:-left-2"
			>
				Home
			</BackButton>

			<section className="relative mx-auto w-1/2 pt-14 pb-8 max-lg:w-[90%]">
				<BlogHeader />
				<ViewAsApi />
				<div className="mt-6">{children}</div>
				<BackTop />
			</section>
		</section>
	);
}
