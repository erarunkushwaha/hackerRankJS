/*
 * Create the function factorial here
 * function 
 */
function factorial(n){
    if(n < 2){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(5));