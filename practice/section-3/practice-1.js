'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var arr = [];
	arr = [...collectionA];
	for(var j = 0; j < collectionA.length; j++){
		for (var i = 0; i < objectB.value.length; i++){
			if (objectB.value[i] == collectionA[j].key){
				arr[j].count = collectionA[j].count-1;
			}
		}
	}
	return arr;


}
