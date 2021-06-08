//GIVEN THE ARRAY IS SORTED!!!!!

const binarySearch = (arr, value, start, end) => {
    start = (typeof start !== 'undefined') ? start : 0              //handles if start isn't sent as param
    end = (typeof end !== 'undefined') ? end : (arr.length - 1)     //handles if end isn't sent as param

    if (end >= start) {                         //if array length is larger than the starting position. (array gets cut in half each pass through)
        let midPoint = start + Math.floor((end - start) / 2);
        //basecase for if value is in array
        //if it's in the array it will eventually reduce the array to only one so it will become the midpoint
        //if the midpoint equals the value, return true. 
        if (arr[midPoint] == value) {
            return true;
        }
        // If element is smaller than midpoint, it's in the left half
        if (arr[midPoint] > value) {
            //repeat with right half
            return binarySearch(arr, value, start, (midPoint - 1));
        }
        // If element is larger than midpoint, it's in the right half
        else {
            //search/repeat with the right half
            return binarySearch(arr, value, (midPoint + 1), end);
        }

    }
    //basecase for if the value is not in the array, 
    //value is never the midpoint, it's not in the array. return false
    return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13], 10))
console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 9))
console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 16))
console.log(binarySearch([0, 2, 4, 6, 8, 12, 14, 16], 8))
console.log(binarySearch([8], 8))