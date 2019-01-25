import rowsByPosition from './rows-by-position';

const placeholder = '{{artboardName}}';

export default function autoalign(page) {
	const rows = rowsByPosition(page);
	const rowNames = Object.keys(rows);

	for (const rowName of rowNames) {
		const row = rows[rowName];

		for (const artboard of row) {
			const layers = artboard.layers();
			layers.forEach(item => {
				if (String(item.name()) === placeholder) {
					item.setStringValue(artboard.name());
				}
			});
		}
	}
}
