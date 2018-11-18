const {Calendar} = require('../../calendar');
const {MAX_DAY_FEBRUARY, MAX_DAY_FEBRUARY_LEAP_YEAR, FEBRUARY} = require('./lib/dates');

describe('leap years (A.C.)', () => {
    const calendar = new Calendar();
    const dates = [
        {
            year: 4,
        }, {
            year: 104,
        }, {
            year: 400,
        }, {
            year: 672,
        }, {
            year: 1004,
        }, {
            year: 2000,
        }, {
            year: 2996,
        },
    ];

    for (const date of dates) {

        describe(`leap year ${date.year}`, () => {

            it('should set leap year', () => {
                calendar.setYear(date.year);
                expect(calendar.getYear()).toStrictEqual(date.year);
            });

            it(`should have max day equal ${MAX_DAY_FEBRUARY_LEAP_YEAR} in february for leap year`, () => {
                calendar.setMonth(FEBRUARY);
                expect(calendar.getMaxDay()).toStrictEqual(MAX_DAY_FEBRUARY_LEAP_YEAR);
            });

            it('should set not leap year', () => {
                calendar.setYear(date.year + 1);
                expect(calendar.getYear()).toStrictEqual(date.year + 1);
            });

            it(`should have max day equal ${MAX_DAY_FEBRUARY} in february for not leap year`, () => {
                calendar.setMonth(FEBRUARY);
                expect(calendar.getMaxDay()).toStrictEqual(MAX_DAY_FEBRUARY);
            });
        });
    }
});


describe('leap year (B.C.)', () => {
    const calendar = new Calendar();
    const dates = [
        {
            year: -5,
        }, {
            year: -105,
        }, {
            year: -401,
        }, {
            year: -673,
        }, {
            year: -1005,
        }, {
            year: -2001,
        }, {
            year: -2997,
        },
    ];


    for (const date of dates) {

        describe(`leap year ${date.year}`, () => {

            it('should set leap year', () => {
                calendar.setYear(date.year);
                expect(calendar.getYear()).toStrictEqual(date.year);
            });

            it(`should have max day equal ${MAX_DAY_FEBRUARY_LEAP_YEAR} in february for leap year`, () => {
                calendar.setMonth(FEBRUARY);
                expect(calendar.getMaxDay()).toStrictEqual(MAX_DAY_FEBRUARY_LEAP_YEAR);
            });

            it('should set not leap year', () => {
                calendar.setYear(date.year + 1);
                expect(calendar.getYear()).toStrictEqual(date.year + 1);
            });

            it(`should have max day equal ${MAX_DAY_FEBRUARY} in february for not leap year`, () => {
                calendar.setMonth(FEBRUARY);
                expect(calendar.getMaxDay()).toStrictEqual(MAX_DAY_FEBRUARY);
            });
        });
    }
});
