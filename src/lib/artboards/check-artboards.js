import rowsByPosition from './rows-by-position';

const getArtboards = rows => Object.keys(rows).map(rowName => rows[rowName]);
const filterArtboards = (artboardToFilter, invalidArtboards) =>
	artboardToFilter.filter(artboard => !invalidArtboards.find(invalid => invalid.name() === artboard.name()));

export default function checkArtoboards(pageIt, pageEn) {
	const rowsIt = rowsByPosition(pageIt);
	const rowsEn = rowsByPosition(pageEn);

	const artboardsItRows = getArtboards(rowsIt);
	const artboardsEnRows = getArtboards(rowsEn);
	const innerArtboardsIt = artboardsItRows.reduce((acc, artboardGroup) => acc.concat(...artboardGroup), []);
	const innerArtboardsEn = artboardsEnRows.reduce((acc, artboardGroup) => acc.concat(...artboardGroup), []);

	if (innerArtboardsEn.length !== innerArtboardsIt.length) {
		// If ENG is invalid filter on IT to find what's missing
		const missingArtboardsEn = filterArtboards(innerArtboardsIt, innerArtboardsEn).map(artboard => artboard.name());
		const missingArtboardsIt = filterArtboards(innerArtboardsEn, innerArtboardsIt).map(artboard => artboard.name());

		const missingItaMessage = missingArtboardsIt.length > 0 ? `ITA: ${missingArtboardsIt} ` : '';
		const missingEngMessage = missingArtboardsEn.length > 0 ? `ENG: ${missingArtboardsEn}` : '';
		return {message: '⚠️ Artboards missing. Details: '.concat(missingItaMessage).concat(missingEngMessage)};
	}
}
