let _toggle = ()=>{
    let bool = false;
        return ()=> bool= !bool
}
let test = _toggle()
console.log(test()); //true
console.log(test()); //false