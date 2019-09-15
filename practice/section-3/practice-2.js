'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var ctr = 1;
	var arr = [];
	for(var i = 0; i < collectionA.length; i++){
		var cnt = collectionA[i].count;
		for(var j = 0; j < objectB.value.length; j++){
			if(collectionA[i].key === objectB.value[j]){
				cnt -= ctr;
				ctr++;
				if(ctr > 3){
					ctr = 1;
				}
			}
		}
		var map = new Map();
		map.set('key', collectionA[i].key);
		map.set('count', cnt);
		arr.push(Object.fromEntries(map.entries()));
	}	
	return arr;
}
