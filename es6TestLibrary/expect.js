function mapObjToString(obj,result = {},parentKey=undefined){
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                result[key] = true;
                mapObjToString(obj[key], result, key);
            } else {
                if(parentKey !== undefined ) {
                    result[`${parentKey}.${key}`] = obj[key];
                }else{
                    result[`${key}`] = obj[key];
                }
            }
        }
    }
    return result
}

class Expect {
    received;
    isObject;
    constructor(received) {
        this.received = received;
        this.isObject = typeof this.received === 'object';
    }
    fail(expected){
        return {expected,received:this.received};
    }
    toEqual(expected){
        if(this.isObject){
            let e = mapObjToString(expected);
            let r = mapObjToString(this.received);
            let keyLength = (obj) => Object.keys(obj).length;
            if(keyLength(e)===keyLength(r)){
                for(let key in expected){
                    if(e[key] !== r[key]){
                        return this.fail(expected);
                    }
                }
                return true
            }
        }else{
            return Object.is(this.received,expected);
        }
    };
    toBe(expected){
        return  Object.is(expected, this.received) ? true : this.fail(expected);
    };
    toHaveReturned(expected){
        if(expect(this.received()).toBe(expected)){
            return true
        }
        return this.fail(expected);
    };
    toMatchArray(expected){
        if (this.received.length === expected.length) {
            let temp = this.received.map((member, index) => member === expected[index]);
            if (!temp.includes(false)) {
                return true
            } else {
                return this.fail(expected);
            }

        }
        return false;
    };
    anything(){
        return this.received !== undefined && this.received !== null ? true : this.fail('To Not be null or undefined');
    };
    arrayContaining(){};
    any(expected){};
    get not(){
        //todo
        return new Expect(!this.received)
    };
    toHaveBeenCalled(){}
    toHaveBeenCalledTimes(){}
    toHaveBeenCalledWith(){}
    toHaveBeenLastCalledWith(){}
    toHaveBeenNthCalledWith(){}
    toHaveReturnedTimes(){}
    toHaveLastReturned(){}
    toHaveNthReturnWith(){}
    toHaveLength(expected){
        return this.received.length === expected ? true : this.fail(`To have length ${expected}`);
    }
    toHaveProperty(expected){
        return Object.keys(mapObjToString(this.received)).includes(expected) ? true : this.fail(expected);
    };
    toHavePropertyWithValue(expected, value) {
        return this.toHaveProperty(expected) && mapObjToString(this.received)[expected] === value;
    };
    toBeFalsey(){
        return !this.received
    };
    toBeGreaterThan(expected){
        return this.received > expected
    };
    toBeGreaterThanOrEqual(expected){
        return this.received >= expected
    };
    toBeLessThan(expected){
        return this.received < expected
    };
    toBeLessThanOrEqual(expected){
        return this.received <= expected
    };
    toBeInstanceOf(expected){
        return this.received instanceof expected
    };
    toBeNull() {
        return this.received === null
    };
    toBeTruthy() {
        return !(!this.received)
    };
    toBeUndefined() {
        return this.received === undefined
    };
    toBeNaN () {
        if (this.toBeFalsey()) {
        }
    };
    toContain(){}
    toContainEqual(){}
    tomatch(){}
    toMatchObject(){}
    toStrictlyEqual(){}
    toThrow(){}
}

export default function expect (received){
    return new Expect(received);
}







