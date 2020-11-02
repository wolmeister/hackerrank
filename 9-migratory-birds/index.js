/**
 * @param {number[]} arr
 */
function migratoryBirds(arr) {
  let countMap = new Map();

  for (const birdType of arr) {
    if (!countMap.has(birdType)) {
      countMap.set(birdType, 0);
    }
    countMap.set(birdType, countMap.get(birdType) + 1);
  }

  return Array.from(countMap.entries())
    .sort((entryA, entryB) => {
      const countComparation = entryB[1] - entryA[1];
      if (countComparation) {
        return countComparation;
      }
      // the lowest id should be first
      return entryA[0] - entryB[0];
    })
    .shift()[0];
}

module.exports = {
  migratoryBirds,
};
