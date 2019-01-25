
export default function rowsByPosition(page) {
	const artboards = page.artboards();

	// Find the row covers
	const rowCovers = artboards.reduce((acc, artboard) => {
		const number = parseInt(artboard.name(), 10);
		return number % 100 === 0 ? acc.concat(artboard) : acc;
	}, []);

	// Sort the existing covers
	rowCovers.sort((a, b) => a.frame().y() - b.frame().y());

	// Build up the rows, starting with their covers
	const rows = rowCovers.reduce((acc, row, index) => {
		const rowName = ((index + 1) * 100).toString();
		acc[rowName] = [row];
		return acc;
	}, {});

	const yPositions = Object.entries(rows).map(([name, row]) => [
		name,
		row[0].frame().y()
	]);

	// Add other artboards into the rows
	for (let i = 0; i < artboards.length; i++) {
		// Skip row covers, obvs...
		if (rowCovers.includes(artboards[i])) {
			continue;
		}

		const yPos = artboards[i].frame().y();

		let closestRow;
		let smallestDist = Infinity;
		for (const [rowName, rowYPos] of yPositions) {
			const yDist = Math.abs(yPos - rowYPos);
			if (yDist < smallestDist) {
				closestRow = rowName;
				smallestDist = yDist;
			}
		}

		rows[closestRow].push(artboards[i]);
	}

	// Sort rows by board x position
	Object.values(rows).forEach(row =>
		row.sort((a, b) => a.frame().x() - b.frame().x())
	);

	return rows;
}
