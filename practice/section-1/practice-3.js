'use strict';

function collectSameElements(collectionA, objectB) {
	return collectionA.filter(value => -1 !== Object.values(objectB).reduce(a => a).indexOf(value));
};
