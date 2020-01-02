

/**
 *
 *
 * @class Queue
 * @description
 * @example
 */
class Queue{
    constructor(){
        this.items={}
        this.count=0
        this.lastCount=0
    }
    clear(){
        this.items = {};
        this.count = 0; 
        this.lastCount = 0; 
    }
    Dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lastCount];
        delete this.items[this.lastCount];
        this.lastCount++;
        return result;
    }
    Enqueue(item){
        this.items[this.count]=item;
        this.count++
    }
    isEmpty(){
        return this.size() === 0 
    }
    size(){
        return Object.keys(this.items).length
    }
    toString(){
        if(this.isEmpty()){
            return undefined;
        }
        let objString = `${this.items[this.lastCount] }`;
        for(let i = this.lastCount+1;i<this.count;i++){
            objString += ` ${this.items[i]}`
        }
        return objString
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[lastCount];
    }
}

const exampleQueue = new Queue();

exampleQueue.Enqueue('Michael');
exampleQueue.Enqueue('Walker');
console.log(exampleQueue.toString());
console.log(exampleQueue.Dequeue());
console.log(exampleQueue.Dequeue());
