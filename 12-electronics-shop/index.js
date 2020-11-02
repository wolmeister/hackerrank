/**
 * @param {number[]} keyboards
 * @param {number[]} drives
 * @param {number} budget
 */
function getMoneySpent(keyboards, drives, budget) {
  let maxMoneySpent = -1;

  for (const keyboard of keyboards) {
    for (const drive of drives) {
      const total = keyboard + drive;
      if (total <= budget && total > maxMoneySpent) {
        maxMoneySpent = total;
      }
    }
  }

  return maxMoneySpent;
}

module.exports = {
  getMoneySpent,
};
