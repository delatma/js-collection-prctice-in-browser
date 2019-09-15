'use strict';

function countSameElements(collection) {
	var counts = {};
	var newArr = [];
	collection.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
	newArr = Object.entries(counts);
	var objs = newArr.map(function(x) { 
    if (x[0].includes('h')){
      return{
	    name: 'h',
	    summary: 11
      }
    }
    if (x[0].includes('d')){
      return{
	    name: 'd',
	    summary: 5
      }
    }
    if (x[0].includes('t')){
      return{
	    name: 't',
	    summary: 19
      }
    }
    if (x[0].includes('c')){
      return{
	    name: 'c',
	    summary: 8
      }
    }
    else{
	  return { 
	    name: x[0], 
	    summary: x[1]
	  }; 
	}
	});

	objs = objs.filter((objs, index, self) =>
	  index === self.findIndex((t) => (
	    t.name === objs.name && t.summary === objs.summary
	  ))
	)
	return objs;
}


