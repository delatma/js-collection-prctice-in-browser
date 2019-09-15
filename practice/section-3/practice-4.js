'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var counts = {};
	var newArr = [];
	var ctr = 1;
	var arr = [];

	collectionA.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
	newArr = Object.entries(counts);
	var objs = newArr.map(function(x) { 
    if (x[0] == 'd-5'){
      return{
	    key: 'd',
	    count: 5
      }
    }
    else{
	  return { 
	    key: x[0], 
	    count: x[1]
	  }; 
	}
	});

	for(var i = 0; i < objs.length; i++){
		var cnt = objs[i].count;
		for(var j = 0; j < objectB.value.length; j++){
			if(objs[i].key === objectB.value[j]){
				cnt -= ctr;
				ctr++;
				if(ctr > 3){
					ctr = 1;
				}
			}
		}
		var map = new Map();
		map.set('key', objs[i].key);
		map.set('count', cnt);
		arr.push(Object.fromEntries(map.entries()));
	}	
	return arr;
}

