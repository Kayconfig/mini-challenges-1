/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(arr) {
    // given an n by m matrix array where n= number of rows, m= number of columns

    // buildArray returns an array containing m number of empty arrays to represent
    // the new row count.
    let buildArray = () => {
        let newArr = [];
        arr[0].forEach(num => newArr.push([]));
        return newArr;
    }

    let transposedArray = buildArray();


    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[0].length; col++) {
            transposedArray[col][row] = arr[row][col]
        } // inner loop
    } // outer forloop

    return transposedArray;

}

module.exports = transpose;
