export default function getFormattedDate(date: string) {
	const unformattedDate = date?.split('-')?.at(2) as string;
	return parseInt(unformattedDate) > 10
		? unformattedDate
		: `0${unformattedDate}`;
}
