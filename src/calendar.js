const {Util} = require('./lib/util');

class Calendar {
    constructor() {
        this._util = new Util();
        // 0 excluded due to absence in the Gregorian calendar.
        this._EXCLUDED_YEARS = [0];
        // A.C.
        this._MAX_YEAR = 9999;
        // B.C.
        this._MIN_YEAR = -9999;

        this._MAX_MONTH = 12;
        this._MIN_MONTH = 1;

        this._MIN_DAY = 1;

        this._year = this._util.generateRandomNumber(this._MIN_YEAR, this._MAX_YEAR);
        while (this._EXCLUDED_YEARS.includes(this._year)) {
            this._year = this._util.generateRandomNumber(this._MIN_YEAR, this._MAX_YEAR);
        }

        this._month = this._util.generateRandomNumber(this._MIN_MONTH, this._MAX_MONTH);

        this._calculateMaxDay();
    }

    /**
     * Calculate max day based on current month and year
     */
    _calculateMaxDay() {
        const LONG_MONTHS = [1, 3, 5, 7, 8, 10, 12];

        // max day depends on the year and month
        if (LONG_MONTHS.includes(this._month)) {
            this._maxDay = 31;
        // if month is february, year maybe be leap year
        } else if (this._month === 2) {
            this._maxDay = (this._year % 400 === 0 || (this._year % 4 === 0 && this._year % 100 !== 0)) ? 29 : 28;
        } else {
            this._maxDay = 30;
        }

        // if day not set, or current day bigger than max day, change current day
        if (!this._day || this._day > this._maxDay) {
            this._day = this._util.generateRandomNumber(this._MIN_DAY, this._maxDay)
        }
    }

    getMaxDay() {
        return this._maxDay;
    }

    getDay() {
        return this._day;
    }

    getMonth() {
        return this._month;
    }

    getYear() {
        return this._year;
    }

    setDay(day) {
        if (!this._util.isNumber(day) || !this._util.isInRange(day, this._maxDay, this._MIN_DAY)) {
            throw new TypeError(`Day should be number in range ${this._MIN_DAY} ... ${this._maxDay}!`)
        }

        this._day = day;
    }

    setMonth(month) {
        if (!this._util.isNumber(month) || !this._util.isInRange(month, this._MAX_MONTH, this._MIN_MONTH)) {
            throw new TypeError(`Month should be number in range ${this._MIN_MONTH} ... ${this._MAX_MONTH}!`)
        }

        this._month = month;
        // after update current month, need recalculate max day
        this._calculateMaxDay();
    }

    setYear(year) {
        if (!this._util.isNumber(year) || this._EXCLUDED_YEARS.includes(year) || !this._util.isInRange(year, this._MAX_YEAR, this._MIN_YEAR)) {
            throw new TypeError(`Year should be number in range ${this._MIN_YEAR} ... ${this._MAX_YEAR}!`)
        }

        this._year = year;
    }
}

module.exports = {
    Calendar,
};
