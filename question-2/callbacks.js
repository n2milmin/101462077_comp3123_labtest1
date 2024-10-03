/****************************************************************************************
 * 
 * COMP 3123 - Full Stack Dev
 * Lab Test 1
 * Question 2
 *       Given the script file callbacks.js, write a script that does the following:
 *          - Create a method resolvedPromise that is similar to
 *              delayedSuccess and resolves a message after a timeout of 500ms.
 *          - Create a method rejectedPromise that is similar to
 *              delayedException and rejects an error message after a timeout of
 *              500ms.
 *          - Call both promises separately and handle the resolved and reject
 *              results and then output to the console
 * 
 * Nicole Milmine 
 * 101462077
 * 
****************************************************************************************/

// Resolved Promise
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve({msg: "Delayed Success"}), 500 );
    });
}
resolvedPromise().then(msg => console.log(msg));

// Rejected Promise
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(reject({err: "Delayrd Exception"}), 500);
    });
}
rejectedPromise().catch(msg => console.log(msg));
