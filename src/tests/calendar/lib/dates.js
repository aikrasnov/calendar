const MAX_YEAR = 9999;
const MIN_YEAR = -9999;
const yearRange = [].concat(
    ...[...new Array(MAX_YEAR)].map((el, index) => index + 1),
    ...[...new Array(MIN_YEAR * -1)].map((el, index) => (index + 1) * -1),
).filter(el => el !== 0);

const MAX_MONTH = 12;
const MIN_MONTH  = 1;
const monthRange = [...new Array(MAX_MONTH)].map((el, index) => index + 1);

const MAX_DAY = 31;
const MIN_DAY = 1;
const dayRange = [...new Array(MAX_DAY)].map((el, index) => index + 1);

const MAX_DAY_FEBRUARY = 28;
const MAX_DAY_FEBRUARY_LEAP_YEAR = 29;
const FEBRUARY = 2;

const MAX_DAY_JANUARY = 31;
const JANUARY = 1;

const MAX_DAY_NOVEMBER = 30;
const NOVEMBER = 11;


module.exports = {
    MAX_YEAR,
    MIN_YEAR,
    yearRange,
    MAX_MONTH,
    MIN_MONTH,
    monthRange,
    MAX_DAY,
    MIN_DAY,
    dayRange,
    MAX_DAY_FEBRUARY,
    MAX_DAY_FEBRUARY_LEAP_YEAR,
    FEBRUARY,
    MAX_DAY_JANUARY,
    JANUARY,
    MAX_DAY_NOVEMBER,
    NOVEMBER,
};
