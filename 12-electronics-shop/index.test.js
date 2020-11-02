const { getMoneySpent } = require('./index');

describe('getMoneySpent', () => {
  it('should return the maximum that can be spent', () => {
    expect(getMoneySpent([3, 1], [5, 2, 8], 10)).toBe(9);
  });

  it('should return -1 if it is not possible to buy both items', () => {
    expect(getMoneySpent([4], [5], 5)).toBe(-1);
  });
});
