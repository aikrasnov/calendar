const {Calendar} = require('../../calendar');
const {MAX_DAY_JANUARY, JANUARY, MAX_DAY_NOVEMBER, NOVEMBER, MAX_MONTH, MAX_YEAR, MIN_YEAR} = require('./lib/dates');

describe('valid dates', () => {
    const calendar = new Calendar();

    describe('days ', () => {

        describe('january', () => {
            it(`should set ${JANUARY} month`, () => {
                calendar.setMonth(JANUARY);
                expect(calendar.getMonth()).toStrictEqual(JANUARY);
            });

            it(`should have max day equal ${MAX_DAY_JANUARY}`, () => {
                expect(calendar.getMaxDay()).toStrictEqual(MAX_DAY_JANUARY);
            });

            it(`should set any day in range 1 ... ${MAX_DAY_JANUARY}`, () => {
                for (let i = 1; i <= MAX_DAY_JANUARY; i++) {
                    calendar.setDay(i);
                    expect(calendar.getDay()).toStrictEqual(i);
                }
            });
        });

        describe('november', () => {
            it(`should set ${NOVEMBER}`, () => {
                calendar.setMonth(NOVEMBER);
                expect(calendar.getMonth()).toStrictEqual(NOVEMBER);
            });

            it(`should have max day equal ${MAX_DAY_NOVEMBER}`, () => {
                expect(calendar.getMaxDay()).toStrictEqual(MAX_DAY_NOVEMBER);
            });

            it(`should set any day in range 1 ... ${MAX_DAY_NOVEMBER}`, () => {
                for (let i = 1; i <= MAX_DAY_NOVEMBER; i++) {
                    calendar.setDay(i);
                    expect(calendar.getDay()).toStrictEqual(i);
                }
            });
        })
    });

    describe('months', () => {
        for (let i = 1; i <= MAX_MONTH; i++) {
            it(`should set any month in range 1 ... ${MAX_MONTH}`, () => {
                calendar.setMonth(i);
                expect(calendar.getMonth()).toStrictEqual(i);
            });
        }
    });

    describe('years', () => {
        describe('B.C.', () => {
            for (let i = MIN_YEAR; i <= -1; i = i + 1000) {
                it(`should set any year in range ${MIN_YEAR} ... -1 (now ${i})`, () => {
                    calendar.setYear(i);
                    expect(calendar.getYear()).toStrictEqual(i);
                });
            }

            it('should set -1 year', () => {
                calendar.setYear(-1);
                expect(calendar.getYear()).toStrictEqual(-1);
            });
        });

        describe('A.C.', () => {
            for (let i = 1; i <= MAX_YEAR; i = i + 1000) {
                it(`should set any year in range 1 ... ${MAX_YEAR} (now ${i})`, () => {
                    calendar.setYear(i);
                    expect(calendar.getYear()).toStrictEqual(i);
                });
            }

            it('should set 9999 year', () => {
                calendar.setYear(9999);
                expect(calendar.getYear()).toStrictEqual(9999);
            });
        });
    });

});
