class Util {

    /**
     * Generate random number in range
     * @param {number} max
     * @param {number} min
     * @return {number}
     */
    generateRandomNumber(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    /**
     * Check if variable is number
     * @param {number} variable
     * @return {boolean}
     */
    isNumber(variable) {
        return typeof variable === 'number' && !isNaN(variable)
    }

    /**
     * Check if variable in range
     * @param {number} variable
     * @param {number} max
     * @param {number} min
     * @return {boolean}
     */
    isInRange(variable, max, min) {
        return variable >= min && variable <= max
    }
}

module.exports = {
    Util,
};
