'use strict';

function collectSameElements(collectionA, collectionB) {
	var a = collectionB.filter((combination) => combination.filter(x => collectionA.includes(x)).length === 4);
	var newArr = [];

	for(var i = 0; i < a.length; i++)
	{
	    newArr = newArr.concat(a[i]);
	}

	return collectionA.filter(value => -1 !== newArr.indexOf(value));
};
