const { pageCount } = require('./index');

describe('pageCount', () => {
  it('should return the minimum number of pages that must be turned', () => {
    expect(pageCount(6, 2)).toBe(1);
    expect(pageCount(5, 4)).toBe(0);
  });
});
