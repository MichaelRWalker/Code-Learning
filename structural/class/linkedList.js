// We need a helper Class for this

let defaultEquals = (a, b) => a === b;

class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
    this.defaultEquals = defaultEquals;
  }
  push(element) {
    const node = new Node(element);
    let current;
    if (this.defaultEquals(this.head, undefined)) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != undefined) {
        current = current.next;
      }
      current.next = node;
      this.count++;
    }
  }
  insert(element, position) {
    const node = new Node(element);
    const previous = this.getElementAt(position-1);
    if(this.defaultEquals(previous,undefined)){return undefined};
    const current = previous.next
    node.next = current
    previous.next = node;
    this.count++
  }
  getElementAt(index) {
    if(index<=this.count&&index>=0){
        let current = this.head
        for(let i = 0 ; i < index&&current!=null; i++){
          current = current.next
        }
        return current
    }
    return undefined;
  }
  getHead(){
      return this.head
  }
  remove(element) {
      let current = this.head
      let previous;
      while(current.element != element){
          previous = current
          current = current.next
      }
      current = current.next
      previous.next = current;
      this.count--
  }
  indexOf(element) {
    let current = this.head
    let index = 0
    while(current.element != element){
        current = current.next
        index++
    }
    return index
  }
  removeAt(position) {
      if(position>=0&&position<=this.count){
        let i = 0
        let current = this.head 
        while (i < position){
            current = current.next
            i++
        }
        this.remove(current.element);
      }
      return undefined
  }
  isEmpty() {
      return this.head === undefined;
  }
  size() {
    return this.count
  }
  toString() {
      if(!this.isEmpty()){
          let str ='';
          let current = this.head
          while(current!==undefined){
              str+= JSON.stringify(current.element)+' '
              current = current.next
          }
          return str
      }
      return undefined
  }
}

let ll = new LinkedList();
ll.push(0);
ll.push(1);
ll.push(3);
ll.push(4);
ll.insert(2,2);
ll.removeAt(2)
console.log(ll.toString())
console.log(ll.indexOf(3))
console.log(ll.head)