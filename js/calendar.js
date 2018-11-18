class Calendar {
    constructor() {
      this._MAX_YEAR = 9999;
      this._MIN_YEAR = 1;

      this._MAX_MONTH = 1;
      this._MIN_MONTH = 12;

      this._MIN_DAY = 1;

      this._year = this._generateRandomNumber(this._MIN_YEAR, this._MAX_YEAR);
      this._month = this._generateRandomNumber(this._MIN_MONTH, this._MAX_MONTH);

      const LONG_MONTHS = [1, 3, 5, 7, 8, 10, 12];

      // max day depends on the year and month
      if (LONG_MONTHS.includes(this._month)) {
        this._maxDay = 31;
      // if month is february, year maybe be leap year
      } else if (this._month === 2) {
        this._maxDay = (this._year % 400 === 0 || (this.year % 4 === 0 && this.year % 100 !== 0)) ? 29 : 28;
      } else {
        this._maxDay = 30;
      }

      this._day = this._generateRandomNumber(this._MIN_DAY, this._maxDay)
    }

    /**
     * Generate random number in range
     * @param {number} max
     * @param {number} min
     * @return {number}
     */
    _generateRandomNumber(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

  /**
   * Check if variable is number
   * @param {number} variable
   * @private
   */
  _isNumber(variable) {
      return typeof variable === 'number' && isNaN(variable)
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
      if (!this._isNumber(day) || day > this._maxDay || day < this._MIN_DAY) {
        throw new TypeError(`Day should be number in range ${this._MIN_DAY} ... ${this._maxDay}!`)
      }

      this._day = day;
    }

    setMonth(month) {
      if (!this._isNumber(month)) {
        throw new TypeError(`Month should be number in range ${this._MIN_MONTH} ... ${this._MAX_MONTH}!`)
      }

      this._month = month;
    }

    setYear(year) {
      if (!this._isNumber(year)) {
        throw new TypeError(`Month should be number in range ${this._MIN_YEAR} ... ${this._MAX_YEAR}!`)
      }

      this._year = year;
    }
}

module.exports = {
  Calendar,
};

