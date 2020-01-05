
const memoize = (fn) =>{
    let cache = new Map();
    return (...args)=>{
        if(cache.has(args.toString())){
            return cache.get(args)
        }
        else{
            let fnResults = fn(...args);
            cache.set(args.toString(),fnResults);
            return fnResults;
        }
    }
};