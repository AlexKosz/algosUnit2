// function balancePoint(arr) {
//     let leftSum = 0;
//     let rightSum = 0;
//     let j = (arr.length - 1)
//     for (let i = 0; i < arr.length; i++) {  //loop through left to right with i. j will be used for the right positions
//         if (leftSum < rightSum) {       //if left is smaller, add to left's sum, increment to the right
//             leftSum += arr[i];
//         }
//         else if (rightSum < leftSum) {      //if right is smaller, add to right's sum, increment to the left
//             rightSum += arr[j];
//             j--;
//         }
//         else {                              //if sums are equal
//             if (i < (j - 1)) {              //if left position is before right position, add to both, increment on both directions
//                 leftSum += arr[i];
//                 rightSum += arr[j];
//                 j--;
//             }
//             else {                          //if sums are equal and the position is the same or one apart, return true
//                 return true;
//             }
//         }
//     }
//     if (leftSum == rightSum) return true;
//     else return false;
// }

// console.log(balancePoint([1, 2, 3, 4, 10]))
// console.log(balancePoint([1, 2, 3, 4, 3, 2, 1]))





function balanceIndex(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let j = (arr.length - 1);           //starts at last index of array
    for (let i = 0; i < arr.length; i++) {
        if (leftSum < rightSum) {       //if left is smaller, add to left's sum, increment to the right (increase i)
            leftSum += arr[i];
        }
        else if (rightSum < leftSum) {      //if right is smaller, add to right's sum, increment to the left (decrease j)
            rightSum += arr[j];
            j--;
        }
        else {                              //if sums are equal
            if (i == j) {                   //if left and right position are equal, return true
                return true;
            }
            else {              //if left position is before right position, add to both, increment on both directions (i+, j-)
                leftSum += arr[i];
                rightSum += arr[j];
                j--;
            }

        }
    }
    return false
}

console.log(balanceIndex([1, 2, 3, 4, 10]))
console.log(balanceIndex([1, 2, 3, 4, 3, 2, 1]))