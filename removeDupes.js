const removeDupes = (arr) => {
    let Obj = {};
    //loop through array
    for (let i = 0; i < arr.length; ++i) {
        //if that value was NOT added as a key into object already, initialize it
        if (!Obj[arr[i]]) {
            Obj[arr[i]] = 1;
        }
    }
    //return an array of the keys in the object
    return Object.keys(Obj);
}

console.log(removeDupes([5, 1, 1, 3, 4, 1, 2, 10, 2, 4, 1, 1, 3]));