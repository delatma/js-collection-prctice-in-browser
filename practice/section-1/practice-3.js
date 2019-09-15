'use strict';

function collectSameElements(collectionA, objectB) {
	var arr = [];
	var newArr = [];
	for (var key in objectB) {
	    if (objectB.hasOwnProperty(key)) {
	        arr.push(objectB[key]);
	    }
	};

	for(var i = 0; i < arr.length; i++)
	{
	    newArr = newArr.concat(arr[i]);
	}

	return collectionA.filter(value => -1 !== newArr.indexOf(value));
}
