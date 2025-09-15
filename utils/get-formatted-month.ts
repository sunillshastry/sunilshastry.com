export default function getFormattedMonth(date: string) {
	const monthValue = parseInt(date?.split('-')?.at(1) as string);

	if (monthValue === 1) {
		return 'January';
	} else if (monthValue === 2) {
		return 'February';
	} else if (monthValue === 3) {
		return 'March';
	} else if (monthValue === 4) {
		return 'April';
	} else if (monthValue === 5) {
		return 'May';
	} else if (monthValue === 6) {
		return 'June';
	} else if (monthValue === 7) {
		return 'July';
	} else if (monthValue === 8) {
		return 'August';
	} else if (monthValue === 9) {
		return 'September';
	} else if (monthValue === 10) {
		return 'October';
	} else if (monthValue === 11) {
		return 'November';
	} else if (monthValue === 12) {
		return 'December';
	}
	return '';
}
