console.log(spliceArray([1,2,3,4,5], 1, 4))

/**
 * Takes an array, a min and a max and returns the values between min and max of the array
 * @param {object} array array to splice
 * @param {number} min minimum of the range
 * @param {number} max maximum of the range
 * @returns {object} a new array with the values between min and max
 */
function spliceArray(array, min, max){
    return array.splice(min,max);
}