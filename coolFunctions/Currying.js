/*
    Currying is the practice of slowly baking in all of the arguements of a function so that it can be 
    called in steps.
*/

function curryMaker(base,spice,meat,vegatables){
    return `I made a Special ${base} curry with ${meat} and ${vegatables} that i added some ${spice} too`;
}

let curryFunc = 
    base => 
        meat =>
            spice =>
                vegetables =>
                    curryMaker(base,meat,vegetables,spice);


let myCurry = curryFunc('green');
let curryWithMeat = myCurry('pork');
let spicedCurry = curryWithMeat('cummin');
let readyCurry = spicedCurry('celery');

console.log(readyCurry)

// or

let cookedCurry = curryFunc('red')('tofu')('Bamboo Shoots')('Nappa Cabbage')
console.log(cookedCurry);

//-----------------------------------------------------------------------
let foo = (a,b,c)=>[a,b,c]
const curry = fn => (...args) => fn.bind(null,...args);
let funny = curry(foo);
console.log(funny())