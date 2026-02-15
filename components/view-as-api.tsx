import { ChevronsRight } from 'lucide-react';

function ViewAsApi() {
	return (
		<>
			<span className="mt-3 block text-right text-xs">
				<a
					href="/api/blogs"
					className="inline-flex items-center justify-center gap-x-1 text-right underline-offset-4 hover:underline"
				>
					<span>View as API</span>
					<span>
						<ChevronsRight size={12} />
					</span>
				</a>
			</span>
		</>
	);
}

export default ViewAsApi;
