import rowsByPosition from './rows-by-position';

export default function autoalign(page) {
	const rows = rowsByPosition(page);

	const rowNames = Object.keys(rows).sort(
		(a, b) => parseInt(a, 10) - parseInt(b, 10)
	);

	let y = 0;
	for (const rowName of rowNames) {
		const row = rows[rowName];
		let x = 0;
		let nextYOffset = 1000;
		let sequenceNumber = 0;

		for (const artboard of row) {
			// Make sure they're in the right order, so the list on the left is sorted
			const parent = artboard.parentGroup();
			artboard.removeFromParent();
			parent.insertLayer_atIndex(artboard, 0);

			// Update name
			const artboardNumber = parseInt(rowName, 10) + sequenceNumber;
			artboard.name = artboardNumber.toString();

			// Update artboard's position
			// artboard.frame().{x,y}() isn't always relatively to (0,0), and using
			// absoluteRect.ruler{X,Y} seems to solve this
			artboard.absoluteRect().rulerX = x;
			artboard.absoluteRect().rulerY = y;

			// Use the height of the largest artboard on this row to determine the
			// y-offset of the next row (plus a small buffer for labels)
			const height = artboard.frame().height() + 100;
			if (height > nextYOffset) {
				// Snap to a 500 unit grid
				nextYOffset = height + (500 - (height % 500));
			}

			x += 500;
			sequenceNumber++;
		}
		y += nextYOffset;
	}
}
