import { ComponentPropsWithoutRef } from 'react';
import { CodeBlock } from './interfaces/CodeBlock';
import checkCommentChar from './utils/check-comment-char';
import CodeSnippet from './components/code-snippet';

const mdxRemoteComponents = {
	h1: (props: ComponentPropsWithoutRef<'h1'>) => (
		<h1 className="my-3 text-xl font-bold" {...props} />
	),
	h2: (props: ComponentPropsWithoutRef<'h2'>) => (
		<h2 className="my-2 mt-10 text-lg font-bold" {...props} />
	),
	h3: (props: ComponentPropsWithoutRef<'h3'>) => (
		<h3 className="my-2 mt-6 text-lg font-bold" {...props} />
	),
	strong: (props: ComponentPropsWithoutRef<'strong'>) => (
		<strong className="font-bold" {...props} />
	),
	p: (props: ComponentPropsWithoutRef<'p'>) => (
		<p className="my-5 leading-9" {...props} />
	),
	hr: (props: ComponentPropsWithoutRef<'hr'>) => (
		<hr className="my-6 border-gray-400/25" {...props} />
	),
	blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
		<blockquote
			className="border-l-4 border-l-gray-400 bg-gray-400/25 pl-4 italic"
			{...props}
		/>
	),
	ol: (props: ComponentPropsWithoutRef<'ol'>) => (
		<ol className="list-decimal" {...props} />
	),

	ul: (props: ComponentPropsWithoutRef<'ul'>) => (
		<ul className="list-disc" {...props} />
	),

	li: (props: ComponentPropsWithoutRef<'li'>) => (
		<li className="my-4 leading-9" {...props} />
	),

	a: (props: ComponentPropsWithoutRef<'a'>) => (
		<a className="underline underline-offset-4" {...props} />
	),

	img: (props: ComponentPropsWithoutRef<'img'>) => (
		// eslint-disable-next-line @next/next/no-img-element
		<img className="my-2" alt={props.alt} {...props} />
	),

	code: (props: ComponentPropsWithoutRef<'code'>) => {
		const language = props.className?.split('-')?.at(1);

		// Inline code (without any real snippet)
		if (!language) {
			return (
				<code
					className="rounded-md border border-gray-400/25 p-1 text-sm text-red-400 shadow-xs shadow-gray-400/25"
					{...props}
				/>
			);
		}

		let filename = '';
		let code = '';

		if (checkCommentChar(props?.children as string)) {
			if ((props?.children as string).startsWith('<!--')) {
				// For HTML code block
				// Remove first side
				filename = (props?.children as string)
					.split('\n')
					.at(0)
					?.slice(4)
					.trim() as string;

				filename = filename.slice(0, -3).trim();
			} else {
				// For other code block(s)
				filename = (props?.children as string)
					.split('\n')
					.at(0)
					?.slice(2)
					.trim() as string;
			}

			// Retrieve the 'main' part of the code (without the first line - containing the file name)
			code = (props?.children as string).split('\n').slice(1).join('\n');
		}

		const codeblock: CodeBlock[] = [
			{
				language: language as string,
				filename: '',
				code: code as string,
			},
		];

		return (
			<CodeSnippet
				code={codeblock}
				language={language as string}
				filename={filename}
			/>
		);
	},
};

export default mdxRemoteComponents;
