'use client';
import { BlogMeta } from '@/interfaces/BlogMeta';
import { Check, ChevronDown, Link } from 'lucide-react';
import {
	FacebookShareButton,
	FacebookIcon,
	RedditShareButton,
	RedditIcon,
} from 'next-share';
import { TwitterShareButton, TwitterIcon } from 'next-share';
import { LinkedinShareButton, LinkedinIcon } from 'next-share';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { useState } from 'react';

interface FunctionProps {
	blog: BlogMeta;
}

export default function ShareTab({ blog }: FunctionProps) {
	const { theme } = useTheme();
	const [hasCopied, copyToClipboard] = useCopyToClipboard();
	const [copied, setCopied] = useState(() => Boolean(hasCopied));

	function copyBlogURL() {
		setCopied(false);
		copyToClipboard(window.location.href);
		setCopied(true);
		setTimeout(function () {
			setCopied(false);
		}, 1000);
	}

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

				<Tooltip>
					<TooltipTrigger asChild>
						<button
							className={cn(
								'ease rounded-full p-2 transition hover:cursor-pointer',
								theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
							)}
							onClick={copyBlogURL}
						>
							{copied ? <Check size={16} /> : <Link size={16} />}
						</button>
					</TooltipTrigger>
					<TooltipContent>
						<p>{copied ? 'Copied!' : 'Copy link'}</p>
					</TooltipContent>
				</Tooltip>
			</div>
		</div>
	);
}
