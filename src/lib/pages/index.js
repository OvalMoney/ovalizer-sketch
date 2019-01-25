export function getPages(context) {
	const pages = context.document.pages();
	const itPage = pages.find(page => String(page.name).includes('ITA'));
	const enPage = pages.find(page => String(page.name).includes('ENG'));
	return {itPage, enPage};
}
