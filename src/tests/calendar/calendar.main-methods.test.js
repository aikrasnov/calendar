const {Calendar} = require('../../../calendar');
const {yearRange, monthRange, dayRange} = require('./lib/dates');

describe('Main methods', () => {

    for (let i = 0; i < 10; i++) {
        const calendar = new Calendar();

        describe(`Date ${calendar.getYear()}-${calendar.getMonth()}-${calendar.getDay()}`, () => {

            it('calendar should have year', () => {
                expect(yearRange).toContain(calendar.getYear());
            });

            it('calendar should have month', () => {
                expect(monthRange).toContain(calendar.getMonth());
            });

            it('calendar should have day', () => {
                expect(dayRange).toContain(calendar.getDay());
            });
        });
    }
});
