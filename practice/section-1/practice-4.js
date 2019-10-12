'use strict';

function collectSameElements(collectionA, objectB) {
	let valueA = collectionA.map(a => a.key)
	let valueB = Object.values(objectB).reduce(a => a);
	return valueA.filter(value => -1 !== valueB.indexOf(value))
}
