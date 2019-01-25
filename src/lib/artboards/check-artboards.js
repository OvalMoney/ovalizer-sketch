import rowsByPosition from './rows-by-position';

const getArtboards = rows => Object.keys(rows).map(rowName => rows[rowName]);
const filterArtboards = (artboardToFilter, invalidArtboards) =>
	artboardToFilter.filter(artboard => !invalidArtboards.find(invalid => invalid.name() === artboard.name()));

export default function checkArtoboards(pageIt, pageEn) {
	const rowsIt = rowsByPosition(pageIt);
	const rowsEn = rowsByPosition(pageEn);

	const artboardsIt = getArtboards(rowsIt);
	const artboardsEn = getArtboards(rowsEn);

	if (artboardsEn.length !== artboardsIt.length) {
		const isEnInvalid = artboardsEn.length < artboardsIt.length;
		const innerArtboardsIt = artboardsIt.reduce((acc, artboardGroup) => acc.concat(...artboardGroup), []);
		const innerArtboardsEn = artboardsEn.reduce((acc, artboardGroup) => acc.concat(...artboardGroup), []);
		// If ENG is invalid filter on IT to find what's missing
		const missingArtboards = isEnInvalid ?
			filterArtboards(innerArtboardsIt, innerArtboardsEn) :
			filterArtboards(innerArtboardsEn, innerArtboardsIt);
		const missingArtboardsNames = missingArtboards.map(artboard => artboard.name());

		const invalidPage = isEnInvalid ? 'ENG' : 'IT';

		return {message: `⚠️ pages are missing in "${invalidPage}": ${missingArtboardsNames}`};
	}
}
