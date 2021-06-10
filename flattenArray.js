function flattenArray(arr) {
    //loop trhough array
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) { //if array position is an array do this
            let flat = flattenArray(arr[i]) //call function recursivly to handle that array having an array
            for (let j = 0; j < flat.length; j++) { //loop through the result of the previous function call (line 5)
                if (flat[0]) {                      //if there is a value in the array
                    arr.splice((i), 0, flat[0])     //splice it in to the array passed in at index i
                    flat.shift();                   //remove first value from the result of line 5 
                }
            }
        }
        if (arr[i].length == 0) {                   //if there is an empty array at spot i
            arr.splice(i, 1);                       //delete that item
            i--;                                    //decrement i to account for decrease in length
        }
    }
    return arr;

}

// console.log(flattenArray([[1, [2, 2, 2, 4], 3], 5, 8, [3, 6, 1], [5, 7, 7]]))
console.log(flattenArray([1, [2, 2], [3, 3, 3], [[4, 4], [4, 4]], [5, [5, [5, [5, 5]]]], 6]))