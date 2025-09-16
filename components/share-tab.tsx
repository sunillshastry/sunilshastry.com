'use client';
import { BlogMeta } from '@/interfaces/BlogMeta';
import { ChevronDown } from 'lucide-react';
import {
	FacebookShareButton,
	FacebookIcon,
	RedditShareButton,
	RedditIcon,
} from 'next-share';
import { TwitterShareButton, TwitterIcon } from 'next-share';
import { LinkedinShareButton, LinkedinIcon } from 'next-share';

interface FunctionProps {
	blog: BlogMeta;
}

export default function ShareTab({ blog }: FunctionProps) {
	return (
		<div className="mt-8 mb-2">
			<span className="flex items-center gap-x-1 font-mono text-xs uppercase">
				<span>Share blog</span>
				<span>
					<ChevronDown size={12} />
				</span>
			</span>
			<div className="mt-2 flex gap-x-3 text-black">
				<FacebookShareButton
					url={`https://sunilshastry.com/blogs/${blog?.slug}`}
					quote={blog?.description}
					hashtag={'#sunilshastry #blog'}
				>
					<FacebookIcon size={32} round />
				</FacebookShareButton>

				<RedditShareButton
					url={`https://sunilshastry.com/blogs/${blog?.slug}`}
					title={blog?.description}
				>
					<RedditIcon size={32} round />
				</RedditShareButton>

				<TwitterShareButton
					url={`https://sunilshastry.com/blogs/${blog?.slug}`}
					title={blog?.description}
				>
					<TwitterIcon size={32} round />
				</TwitterShareButton>

				<LinkedinShareButton
					url={`https://sunilshastry.com/blogs/${blog?.slug}`}
				>
					<LinkedinIcon size={32} round />
				</LinkedinShareButton>
			</div>
		</div>
	);
}
