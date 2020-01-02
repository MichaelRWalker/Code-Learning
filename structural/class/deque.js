/*
A Deque also known as a "double ended queue" allows us to add and remove elements from both ends
*/



class deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.items = {};
  }
  size() {
    return this.count - this.lowestCount;
  }
  toString() {
    if (this.isEmpty()) {
      return undefined;
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString += ` ${this.items[i]}`;
    }
    return objString;
  }
  addFront(item) {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i < 0; i--) {
        this.items[i] = this.items[i - 1];
      }
    }
    this.count++;
    this.lowestCount = 0;
    this.items[0] = item;
  }
  addBack(item) {
    this.items[this.count] = item;
  }
  removeFront() {
    if(this.isEmpty()){
      return undefined
    }
    const result = this.items[this.count]
    delete this.items[this.count];
    this.count--
    return result;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peekFront() {
    return this.items[this.count];
  }
  peekBack() {
    return this.item[this.lowestCount]
  }
}
