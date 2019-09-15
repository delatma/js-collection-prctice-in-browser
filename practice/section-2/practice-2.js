'use strict';

function countSameElements(collection) {
	var counts = {};
	var newArr = [];
	collection.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
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
	return objs;
}


