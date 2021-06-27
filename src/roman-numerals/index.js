/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let sum = 0;
    let romanNumMapping = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let specialCases = ['I', 'X', 'C']

    for (let index = 0; index < roman.length; index++) {
        let current_roman_numeral = roman[index];
        // integer equivalent of current_roman_numeral
        let current_integer = romanNumMapping[current_roman_numeral];

        if (specialCases.includes(current_roman_numeral)) {
            // if index+1 is less than roman.length, then there is valid string ahead
            // this is to prevent going out of index

            let next_roman_numeral = (index + 1 < roman.length) ? roman[index + 1] : "";

            // integer equivalent of next_roman_numeral
            let next_integer = (romanNumMapping.hasOwnProperty(next_roman_numeral)) ? romanNumMapping[next_roman_numeral] : 0;
            if (current_integer < next_integer) {
                sum -= current_integer;
                continue;
            }

        }
        // default action
        sum += current_integer;
    } // end forloop

    return sum;
}

console.log(romanToDecimal("XI"));

module.exports = romanToDecimal;
