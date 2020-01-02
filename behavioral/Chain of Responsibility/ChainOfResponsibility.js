// CHAIN OF RESPONSIBILITY
/*
*Chain of responsibility is a behavorial pattern that lets you pass requests along
*a chain of handlers.
*upon receiving a request each handler decides either to process the request or to 
*pass it to the next handler in the chain
* it can also decide to stop the chain completely if it cannot process the object;

? This pattern would be very useful for multi-step process where the process could change
? adding another step in the chain is much easier than to edit an entire page of code
? to make a single change to data.

? for instance if you wanted to a security phase to checkout process to make sure a user
?  was logged in when making a purchase , this could easily be added to chain below

? this could also be useful for situation such as handling of fetch request as well

The core of this design pattern is to transform behaviors into standalone objects
called handlers.

*/
// This would represent the client object that is being passed along the chain of command
// more specfically the products array would be passed the chain of command 
class ShoppingCart{
    constructor(){
        this.products=[];
    }
    addProduct(product){
        this.products.push(product);
    }
}

// This would be the base handler in the pattern 
// This class can hold the boilerplate for the other handlers.
class Discount{
    calculate(products){
        let nDiscounts = new NumberDiscount();
        let pDiscounts = new PriceDiscount();
        let none = new NoneDiscount();
        nDiscounts.setNext(pDiscounts);
        pDiscounts.setNext(none);
        return nDiscounts.exec(products);
    }
}
// This would be link 1 or the first handler in the chain of Responsibilty
class NumberDiscount{
    constructor(){
        this.next = null;
    }
    setNext(fn){
        this.next = fn
    }
    exec(products){
        let result = 0;
        if(products.length>3){
            result = 0.05;
        }
        return result + this.next.exec(products);
    }
}
// this would be the second link in the chain of responsibility

class PriceDiscount{
    constructor(){
        this.next = null;
    }
    setNext(fn){
        this.next = fn;
    }
    exec(products){
        let result = 0;
        let total = products.reduce((a,b)=>a+b);

        if(total >= 500){
            result = 0.1;
        }
        return result + this.next.exec(products)
    }
}

// this would be the last link in the current COR 
class NoneDiscount{
    exec(){
        return 0;
    }
}


/*
APPLICABILITY 

Use the chain of Responibility pattern when you program is expected to process
different kinds of requests in various ways, but the exact types of the requests
and their sequences are unknown beforehand
*/