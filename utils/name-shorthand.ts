export default function nameShorthand(name: string, len: number = 3) {
	if (name.length <= len) return name;
	return name?.slice(0, len) + '.';
}
