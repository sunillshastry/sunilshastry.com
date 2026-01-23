'use client';
import AnchorLink from '@/components/anchor-link';
import Paragraph from '@/components/paragraph';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { useTheme } from '@/context/ThemeContext';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
	const { theme } = useTheme();

	return (
		<section>
			<div className="pt-28 max-lg:pt-20">
				<h2
					className={`${theme == 'dark' ? 'linear-text' : 'linear-text-light'} text-4xl font-extrabold`}
				>
					Namaste,
				</h2>
				<div className="flex items-center justify-start gap-x-2 max-lg:flex-col max-lg:items-start max-lg:gap-y-5">
					<h1
						className={`${theme == 'dark' ? 'linear-text' : 'linear-text-light'} mt-4 py-1 text-6xl font-black max-lg:text-5xl`}
					>
						My name is Sunil Shastry.
					</h1>

					<div>
						<Link
							href="/me.jpg"
							title="View Sunil's Photo"
							className="relative inline-block size-16"
						>
							<Image
								src="/me.jpg"
								alt="Sunil's Photo"
								quality={75}
								fill={true}
								sizes="64px"
								title="Sunil Shastry"
								className="rounded-full opacity-60 transition ease-in hover:scale-105 hover:opacity-100 max-lg:opacity-75"
							/>
						</Link>
					</div>
				</div>
			</div>

			<div
				className={`mt-12 text-base leading-10 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
			>
				<Paragraph>
					I am an undergraduate student at the{' '}
					<AnchorLink
						href="https://usask.ca/"
						title="University of Saskatchewan (USask)"
					>
						University of Saskatchewan
					</AnchorLink>
					, Canada, currently pursuing a Bachelor of Science degree with a major
					in Computer Science and a minor in Theoretical Mathematics. My
					academic interests within computer science primarily focus on{' '}
					<AnchorLink
						href="https://aws.amazon.com/what-is/full-stack-development/"
						title="What is Full Stack Development (AWS)"
					>
						Full Stack Development
					</AnchorLink>{' '}
					and{' '}
					<AnchorLink
						href="https://en.wikipedia.org/wiki/Distributed_computing"
						title="Distributed Computing (Wikipedia)"
					>
						Distributed Systems/Computing
					</AnchorLink>{' '}
					, where I explore the design, functionality, scalability, and user
					experience aspects of digital systems. In the field of mathematics, I
					am particularly drawn to{' '}
					<AnchorLink
						href="https://www.britannica.com/science/linear-algebra"
						title="Linear Algebra (Britannica)"
					>
						Linear Algebra
					</AnchorLink>{' '}
					and{' '}
					<AnchorLink
						href="https://en.wikipedia.org/wiki/Discrete_mathematics"
						title="Discrete Mathematics (Wikipedia)"
					>
						Discrete Mathematics
					</AnchorLink>
					, as they complement and provide foundational insights into abstract
					structures, logical reasoning, and computational applications.{' '}
					<Link
						href="/resume.pdf"
						className={`${theme === 'dark' ? 'anchor-link-dark text-white' : 'anchor-link-light text-black'} anchor-link relative inline-flex items-center justify-start gap-x-1 p-0`}
						title="View Sunil's Resume"
					>
						<span>View resume</span>
						<span>
							<ArrowRight size={14} />
						</span>
					</Link>
				</Paragraph>

				<Paragraph className="mt-4">
					I write blogs (on this site and on Medium) relating to technology,
					mathematics and (sometimes) personal topics, which you can view and
					read them on my{' '}
					<AnchorLink href="/blogs" title="Blogs" target="_self">
						blog
					</AnchorLink>{' '}
					page. Outside of programming and university, I enjoy the activities of
					cooking, hiking, and watching movies (mostly thriller).{' '}
					<em>
						Feel free to connect with me on LinkedIn or view my open-source work
						and projects on GitHub.
					</em>
				</Paragraph>
			</div>

			<ul className="mt-5 flex gap-x-5">
				<li>
					<AnchorLink
						href="https://www.linkedin.com/in/sunilshastry/"
						className="pb-1"
						title="Sunil's LinkedIn"
					>
						LinkedIn
					</AnchorLink>
				</li>
				<li>
					<AnchorLink
						href="https://github.com/sunillshastry/"
						className="pb-1"
						title="Sunil's GitHub"
					>
						GitHub
					</AnchorLink>
				</li>

				<li>
					<AnchorLink
						href="https://sunilshastry.medium.com/"
						className="pb-1"
						title="Medium"
					>
						Medium
					</AnchorLink>
				</li>

				<li>
					<AnchorLink
						href="/blogs"
						className="pb-1"
						title="Blogs"
						target="_self"
					>
						Blog
					</AnchorLink>
				</li>
			</ul>

			<p
				className={`mt-6 w-[50%] border-t ${theme === 'dark' ? 'border-white/25' : 'border-black/25'} pt-4 pb-4 text-gray-400 max-lg:w-full max-lg:pb-12`}
			>
				Or reach me out by email at{' '}
				<Tooltip>
					<TooltipContent>contact@sunilshastry.com</TooltipContent>
					<TooltipTrigger>
						<span
							className={`${theme == 'dark' ? 'text-white' : 'text-black'}`}
						>
							contact [at] sunilshastry [dot] com
						</span>
					</TooltipTrigger>
				</Tooltip>
			</p>
		</section>
	);
}
