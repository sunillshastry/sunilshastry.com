import { BlogMeta } from '@/interfaces/BlogMeta';
import getFormattedDate from '@/utils/get-formatted-date';
import getFormattedMonth from '@/utils/get-formatted-month';
import getYear from '@/utils/get-year';
import Link from 'next/link';

interface FunctionProps {
	blog: BlogMeta;
}

export default function BlogTitle({ blog }: FunctionProps) {
	const year = getYear(blog?.date as string);
	const month = getFormattedMonth(blog?.date as string);
	const date = getFormattedDate(blog?.date as string);

	return (
		<>
			<div>
				<div>
					<h1 className="text-2xl font-black">{blog?.title}</h1>
					<span className="text-sm text-gray-400">{blog?.subtitle}</span>
				</div>

				<div className="mt-3 flex items-center justify-between font-mono text-xs max-lg:flex-col max-lg:items-start max-lg:gap-y-3">
					<h3 className="flex items-center justify-start gap-x-2">
						<Link
							href="https://x.com/sunillshastry"
							target="_blank"
							className="inline-block underline-offset-4 hover:underline"
						>
							@sunillshastry
						</Link>
						<span className="border-l border-gray-400/25 pl-2">
							{month} {date}, {year}
						</span>
					</h3>
					<h3>~{blog?.duration}</h3>
				</div>
			</div>
		</>
	);
}
