import rowsByPosition from './rows-by-position';

const getArtboards = rows => Object.keys(rows).map(rowName => rows[rowName]);
const filterArtboards = (artboardToFilter, invalidArtboards) =>
	artboardToFilter.filter(artboard =>
		invalidArtboards
			.find(invalid => invalid.name === artboard.name)
	);

export default function checkArtoboards(pageIt, pageEn) {
	const rowsIt = rowsByPosition(pageIt);
	const rowsEn = rowsByPosition(pageEn);

	const artboardsIt = getArtboards(rowsIt);
	const artboardsEn = getArtboards(rowsEn);

	if (artboardsEn.length !== artboardsIt.length) {
		const isEnInvalid = artboardsEn.length < artboardsIt.length;
		// If ENG is invalid filter on IT to find what's missing
		const missingArtboards = isEnInvalid ?
			filterArtboards(artboardsIt, artboardsEn) :
			filterArtboards(artboardsEn, artboardsIt);
		const missingArtboardsNames = missingArtboards.map(artboardGroup => artboardGroup.map(artboard => artboard.name()));

		const invalidPage = isEnInvalid ? 'ENG' : 'IT';

		return {message: `⚠️ pages are missing in "${invalidPage}": ${missingArtboardsNames}`};
	}
}
