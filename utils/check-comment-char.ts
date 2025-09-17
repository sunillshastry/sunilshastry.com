export default function checkCommentChar(line: string) {
	return (
		line.startsWith('//') || line.startsWith('#') || line.startsWith('<!--')
	);
}
