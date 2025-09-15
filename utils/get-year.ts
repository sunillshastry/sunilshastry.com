export default function getYear(date: string) {
	return date?.split('-')?.at(0);
}
