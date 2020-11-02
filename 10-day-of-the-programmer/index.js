/**
 * @param {number} year
 */
function dayOfProgrammer(year) {
  let day;

  if (year === 1918) {
    day = 26;
  } else if (year < 1918) {
    const isLeap = year % 4 === 0;
    day = isLeap ? 12 : 13;
  } else {
    const isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    day = isLeap ? 12 : 13;
  }

  return `${String(day).padStart(2, '0')}.09.${year}`;
}

module.exports = {
  dayOfProgrammer,
};
