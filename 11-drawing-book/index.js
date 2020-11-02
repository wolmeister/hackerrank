/**
 * @param {number} n
 * @param {number} page
 */
function pageCount(n, page) {
  const maxTurns = Math.floor(n / 2);
  const fromStartTurns = Math.floor(page / 2);
  const fromEndTuurns = maxTurns - fromStartTurns;
  return Math.min(fromStartTurns, fromEndTuurns);
}

module.exports = {
  pageCount,
};
