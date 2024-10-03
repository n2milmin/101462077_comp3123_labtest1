/****************************************************************************************
 * 
 * COMP 3123 - Full Stack Dev
 * Lab Test 1
 * Question 1 
 *      Create a script with a function named lowerCaseWords that takes a
 *          mixed array as input.
 *      The function will do the following.
 *          - return a promise that is resolved or rejected
 *          - filter the non-strings and lower case the remaining words
 * 
 * Nicole Milmine 
 * 101462077
 * 
****************************************************************************************/

function lowerCaseWords(arr){
    return new Promise((resolve, reject) => {
        const filtered = arr.filter(x => typeof x == 'string').map(x => x.toLowerCase());

        if(filtered.length != 0)
            resolve("Filtered array: " + filtered);
        else
            reject("The provided array does not contain any strings.");
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).then(filteredArr => {
    console.log(filteredArr)
}, err => {
    console.log(err)
})

lowerCaseWords([]).then(filteredArr => {
    console.log(filteredArr)
}, err => {
    console.log(err)
})