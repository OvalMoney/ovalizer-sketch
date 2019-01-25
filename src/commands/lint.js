/* eslint-disable-next-line import/no-unresolved */
import UI from 'sketch/ui';

import {getPages} from '../lib/pages';
import autoalign from '../lib/artboards/autoalign';
import fixTitle from '../lib/artboards/fix-title';
import checkArtboards from '../lib/artboards/check-artboards';

export default function validateAndFix(context) {
	const {itPage, enPage} = getPages(context);

	if (!itPage && !enPage) {
		UI.message('⚠️ Missing ITA or ENG page');
		return;
	}

	if (itPage) {
		autoalign(itPage);
		fixTitle(itPage);
	}

	if (enPage) {
		autoalign(enPage);
		fixTitle(enPage);
	}

	if (itPage && enPage) {
		const {message} = checkArtboards(itPage, enPage);
		UI.message(message);
	}
}
