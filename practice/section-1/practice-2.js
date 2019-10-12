'use strict';

function collectSameElements(collectionA, collectionB) {
	return collectionA.filter(value => -1 !== collectionB.reduce(a => a).indexOf(value));
};
