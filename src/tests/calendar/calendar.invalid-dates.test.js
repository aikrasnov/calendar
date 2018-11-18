const {Calendar} = require('../../../calendar');
const {FEBRUARY, MAX_DAY_FEBRUARY, MAX_DAY_FEBRUARY_LEAP_YEAR, MIN_DAY} = require('./lib/dates');

describe('invalid dates', () => {
    const calendar = new Calendar();

    describe('years', () => {
        const invalidYears = [-10000, 0, 10000, {}, [], '124', '-123', new Date(), true, false, null, undefined, false];

        for (const year of invalidYears) {

            it(`should throw error, when try to set year ${year}`, () => {
                expect(() => calendar.setYear(year)).toThrowError('Year should be number in range ');
            });

            it(`should not have year equal ${year}`, () => {
                expect(calendar.getMonth()).not.toStrictEqual(year);
            });
        }
    });

    describe('months', () => {
        const invalidMonths = [-10000, -2, -1, 0, 13, {}, [], '124', '-123', new Date(), true, false, null, undefined, false];

        for (const month of invalidMonths) {

            it(`should throw error, when try to set month ${month}`, () => {
                expect(() => calendar.setMonth()).toThrowError('Month should be number in range ');
            });

            it(`should not have month equal ${month}`, () => {
                expect(calendar.getMonth()).not.toStrictEqual(month);
            });
        }
    });

    describe('days', () => {

        describe('invalid day', () => {
            const invalidDays = [-1, -2, 0, -10000, -2, -1, 0, 32, 103, {}, [], '124', '-123', new Date(), true, false, null, undefined, false];

            for (const day of invalidDays) {

                it(`should throw error, when try to set day ${day}`, () => {
                    expect(() => calendar.setDay(day)).toThrowError('Day should be number in range');
                });
            }
        });

        describe('invalid max day for not leap year', () => {

            it(`should set not leap year and ${FEBRUARY} month`, () => {
                calendar.setYear(1999);
                calendar.setMonth(FEBRUARY);
                expect(calendar.getYear()).toStrictEqual(1999);
            });

            it(`should throw error when set ${MAX_DAY_FEBRUARY_LEAP_YEAR} day for not leap year`, () => {
                expect(() => calendar.setDay(MAX_DAY_FEBRUARY_LEAP_YEAR)).toThrowError(`Day should be number in range ${MIN_DAY} ... ${MAX_DAY_FEBRUARY}`);
            });
        });

        describe('invalid max day for leap year', () => {

            it(`should set leap year and ${FEBRUARY} month`, () => {
                calendar.setYear(4);
                calendar.setMonth(FEBRUARY);
                expect(calendar.getYear()).toStrictEqual(4);
            });

            it(`should throw error when set ${MAX_DAY_FEBRUARY_LEAP_YEAR + 1} day for leap year`, () => {
                expect(() => calendar.setDay(MAX_DAY_FEBRUARY_LEAP_YEAR + 1)).toThrowError(`Day should be number in range ${MIN_DAY} ... ${MAX_DAY_FEBRUARY_LEAP_YEAR}`);
            });
        });

    });
});
