import { ComponentPropsWithoutRef } from 'react';

const mdxRemoteComponents = {
	h1: (props: ComponentPropsWithoutRef<'h1'>) => (
		<h1 className="my-3 text-xl font-bold" {...props} />
	),
	h2: (props: ComponentPropsWithoutRef<'h2'>) => (
		<h2 className="my-2 text-lg font-bold" {...props} />
	),
	h3: (props: ComponentPropsWithoutRef<'h3'>) => (
		<h3 className="my-2 text-lg font-bold" {...props} />
	),
	strong: (props: ComponentPropsWithoutRef<'strong'>) => (
		<strong className="font-bold" {...props} />
	),
	p: (props: ComponentPropsWithoutRef<'p'>) => (
		<p className="leading-9" {...props} />
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
		<li className="my-4" {...props} />
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

		if (!language) {
			return (
				<code
					className="rounded-md border border-gray-400/25 p-1 text-sm text-red-400 shadow-xs shadow-gray-400/25"
					{...props}
				/>
			);
		}

		return (
			<div className="relative my-5 overflow-auto rounded-sm border border-gray-400/25 p-4 text-sm shadow shadow-gray-400/25">
				<label className="absolute top-2 right-2 inline-block font-mono text-xs">
					{language}
				</label>

				<code lang={language} {...props}>
					{props.children}
				</code>
			</div>
		);
	},
};

export default mdxRemoteComponents;
