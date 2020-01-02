class PriorityQueue {
    constructor() {
      //Numbers represent Priority where 1 is extreme importance;
      this.items = { 1: [], 2: [], 3: []};
      this.lowestPriority=3
    }
    addItem(priority, item) {
        if(priority>this.lowestPriority){
            console.warn(`${item} not added to the queue, please check the priority level`)
            return false
        }
        this.items[priority].push(item);
    }
    addNewPriorityLevel(){
        this.lowestPriority++
        this.items[this.lowestPriority]=[];
    }
    getItem() {
        if(this.isEmpty()){
            return undefined;
        }
        for(let i = 1 ; i < 6 ; i++){
            if(this.items[i].length>0){
                return this.items[i].pop();
            } 
        }
    }
    isEmpty(){
        return Object.keys(this.items).every(queue=> this.items[queue].length === 0)
    }
    clear(){
        for(let i = this.lowestPriority ; i > 0  ; i--){
            this.items[i]=[];
        }
    }
  }
  
  let pq = new PriorityQueue();
  pq.addItem(3,5);
  console.log(pq.isEmpty())
  pq.addItem(2,'dogFood');
  pq.addItem(2,'catFood');
  pq.addItem(1,'Henry')
  pq.clear();
  console.log(pq.getItem())
  console.log(pq.getItem())
  console.log(pq.getItem())
  console.log(pq.getItem())
  console.log(pq.getItem())
  console.log(pq.isEmpty());