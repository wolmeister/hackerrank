const { migratoryBirds } = require('./index');

describe('migratoryBirds', () => {
  it('should return the lowest type number of the most frequently sighted bird', () => {
    expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
    expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
  });
});
