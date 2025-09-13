import AnchorLink from '@/components/anchor-link';
import Paragraph from '@/components/paragraph';
import Link from 'next/link';

export default function Page() {
	return (
		<section>
			<div className="pt-28 max-lg:pt-20">
				<h2 className="linear-text text-4xl font-extrabold">Namaste,</h2>
				<h1 className="linear-text mt-4 text-6xl font-black max-lg:text-5xl">
					My name is{' '}
					<Link href="/me.jpg" className="transition hover:text-gray-200">
						Sunil Shastry
					</Link>
					.
				</h1>
			</div>

			<div className="mt-12 text-base leading-10 text-gray-400">
				<Paragraph>
					I am an undergraduate student at the{' '}
					<AnchorLink href="https://usask.ca/">
						University of Saskatchewan
					</AnchorLink>
					, Canada, currently pursuing a Bachelor of Science degree with a major
					in Computer Science and a minor in Theoretical Mathematics. My
					academic interests within computer science primarily focus on{' '}
					<AnchorLink href="https://en.wikipedia.org/wiki/Web_development">
						Web Development
					</AnchorLink>{' '}
					and{' '}
					<AnchorLink href="https://www.spiceworks.com/tech/artificial-intelligence/articles/what-is-hci/">
						Human-Computer Interaction (HCI)
					</AnchorLink>{' '}
					, where I explore the design, functionality, and user experience
					aspects of digital systems. In the field of mathematics, I am
					particularly drawn to{' '}
					<AnchorLink href="https://www.britannica.com/science/linear-algebra">
						Linear Algebra
					</AnchorLink>{' '}
					and{' '}
					<AnchorLink href="https://en.wikipedia.org/wiki/Discrete_mathematics">
						Discrete Mathematics
					</AnchorLink>
					, as they complement and provide foundational insights into abstract
					structures, logical reasoning, and computational applications.{' '}
					<Link
						href="/resume.pdf"
						className="relative inline-block p-0 text-white"
					>
						View resume →
					</Link>
				</Paragraph>

				<Paragraph className="mt-4">
					Outside of programming and university, I enjoy the activities of
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
					>
						LinkedIn
					</AnchorLink>
				</li>
				<li>
					<AnchorLink href="https://github.com/sunillshastry/" className="pb-1">
						GitHub
					</AnchorLink>
				</li>
			</ul>

			<p className="mt-6 w-[50%] border-t border-white/25 pt-4 pb-4 text-gray-400 max-lg:w-full max-lg:text-center">
				Or reach me out by email at{' '}
				<span className="text-white">contact [at] sunilshastry [dot] com</span>
			</p>
		</section>
	);
}
