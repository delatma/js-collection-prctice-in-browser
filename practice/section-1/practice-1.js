'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(value => -1 !== collectionB.indexOf(value))
 
} 