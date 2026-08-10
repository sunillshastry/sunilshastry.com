export default function ProjectInDevelopment() {
	return (
		<span className="flex items-center justify-start gap-x-2 rounded-md border border-green-600 bg-green-100 px-1.5 py-1">
			<span className="relative flex size-2">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-700 opacity-75"></span>
				<span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
			</span>

			<span className="font-mono text-xs text-green-600 uppercase">
				In development
			</span>
		</span>
	);
}
