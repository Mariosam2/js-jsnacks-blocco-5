console.log(mergeArrays(['a','b','c'], [1,2,3]));


/**
 * Takes two arrays and merge them
 * @param {objec} firstArray first array to merge
 * @param {object} secondArray second array to merge
 * @returns {object} merged array
 */
function mergeArrays(firstArray, secondArray){
    let mergedArray = [];
    firstArray.forEach((element,index) => {
        mergedArray.push(element),
        mergedArray.push(secondArray[index]);
    })
    return mergedArray;
}