const {Calendar} = require('../calendar');
const assert = require('assert');

const calendar = new Calendar();

describe('main', () => {

    it('should have year, month, day', async () => {
        assert(typeof calendar.getYear() === 'number');
    });
});
