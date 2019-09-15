'use strict';

function collectSameElements(collectionA, objectB) {
	var arr = [];
	for(var j = 0; j < collectionA.length; j++){
		for (var i = 0; i < objectB.value.length; i++){
			if (objectB.value[i] == collectionA[j]){
				arr.push(objectB.value[i]);
			}
		}
	}
	return arr;
};
