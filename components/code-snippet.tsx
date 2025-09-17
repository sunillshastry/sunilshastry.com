'use client';
import type { BundledLanguage } from '@/components/ui/shadcn-io/code-block';
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockContent,
	CodeBlockCopyButton,
	CodeBlockHeader,
	CodeBlockItem,
} from '@/components/ui/shadcn-io/code-block';
import { useTheme } from '@/context/ThemeContext';
import type { CodeBlock as CustomCodeBlock } from '@/interfaces/CodeBlock';

interface FunctionProps {
	code: CustomCodeBlock[];
	language: string;
	filename?: string;
}

function CodeSnippet({ code, language, filename }: FunctionProps) {
	const { theme } = useTheme();

	const codeTheme =
		theme === 'dark'
			? { light: 'one-dark-pro', dark: 'one-dark-pro' }
			: { light: 'one-light', dark: 'one-light' };

	return (
		<>
			<CodeBlock data={code} defaultValue={code[0].language}>
				<CodeBlockHeader className="flex items-center justify-between">
					<h5 className="ml-2 text-xs text-gray-500">{filename as string}</h5>

					<div className="flex items-center gap-x-2">
						<span className="text-xs text-gray-500">{language}</span>

						<CodeBlockCopyButton
							onCopy={() => console.log('Copied code to clipboard')}
							onError={() => console.error('Failed to copy code to clipboard')}
							title="Copy"
							aria-label="Copy Snippet Button"
							className="mr-1 rounded-lg hover:cursor-pointer hover:bg-gray-400/25"
						/>
					</div>
				</CodeBlockHeader>
				<CodeBlockBody>
					{(item) => (
						<CodeBlockItem
							key={item.language}
							value={item.language}
							lineNumbers={false}
						>
							<CodeBlockContent
								themes={codeTheme}
								language={item.language as BundledLanguage}
							>
								{item.code}
							</CodeBlockContent>
						</CodeBlockItem>
					)}
				</CodeBlockBody>
			</CodeBlock>
		</>
	);
}
export default CodeSnippet;
