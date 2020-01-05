/*

If we list all of the natural numbers below 10 that are multiples of 3 & 5
We get
3 ,5 ,6 , 9
The sum of these multiples is 23
find the sum of all the multiples of 3 or 5 below 1000
 */


let top_index = 1000;
// make a template function
const isMultipleOf = (num) => (factor) => factor % num === 0;

// make multiples function
const multipleOf3 = isMultipleOf(3);
const multipleOf5 = isMultipleOf(5);
// The total desired at the end of the function
let total = 0;
// iterate through all numbers
for (let i = 0 ; i < top_index ; i++){
    if(multipleOf3(i))total += i;
    if(multipleOf5(i))total += i;
}
console.log(total)