//Main class and methods

class _Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
    }
    enqueue(data){
      const node = new _Node(data)
      if(this.first === null){
        this.first = node;
      }
      if(this.last){
        this.last.next = node;
      }
      this.last = node;
    }
  
    dequeue(){
      if(this.first === null){return;}
      const node = this.first;
      this.first = this.first.next;
      if(node === this.last){
        this.last = null;
      }
      return node.value;
    }
  }
  
  function main(){
    const StarTrek = new Queue();
    StarTrek.enqueue('Kirk')
    StarTrek.enqueue('Spock')
    StarTrek.enqueue('Uhura')
    StarTrek.enqueue('Checkov')
    StarTrek.enqueue('Sulu')
  
  
    console.log(StarTrek)
    console.log(peek(StarTrek))
    console.log(isEmpty(StarTrek))
    
    StarTrek.dequeue()
    StarTrek.dequeue()

//Helper functions

  }
  function peek(Queue){
    return Queue.first.value
  }
  function isEmpty(Queue){
    if(!Queue.first){
      return true
    } return false
  }
  
  function display(Queue){
    let arr = []
    let currValue = Queue.first
    let prevValue = Queue.first
    while(currValue !== null){
      arr.push(currValue.value)
      prevValue = currValue
      currValue = currValue.next
    } return arr
  }

  
  //Square Dance function
  
  function squareDance(){
    let dancers = []
    const SquareDanceQueue = new Queue()
    const WaitingQueue = new Queue()
    SquareDanceQueue.enqueue('F Jane')
    SquareDanceQueue.enqueue('M Frank')
    SquareDanceQueue.enqueue('M John')
    SquareDanceQueue.enqueue('M Sherlock')
    SquareDanceQueue.enqueue('F Madonna')
    SquareDanceQueue.enqueue('M David')
    SquareDanceQueue.enqueue('M Christopher')
    SquareDanceQueue.enqueue('F Beyonce')
  
    while (SquareDanceQueue.first){
      if (WaitingQueue.first !== null &&
        (SquareDanceQueue.first.value[0]
          !== WaitingQueue.first.value[0])){
                let first = SquareDanceQueue.dequeue()
                let second = WaitingQueue.dequeue()
                dancers.push([first, second])
      } else {
           let first = SquareDanceQueue.dequeue()
           WaitingQueue.enqueue(first)
    } } console.log(dancers)
    }
  
  squareDance()

  //Ophidian Bank function
  
  function OphidianBank(){
  
    const OphidianQueue = new Queue();
    let minutes = []
    OphidianQueue.enqueue('Tim')
    OphidianQueue.enqueue('Rachel')
    OphidianQueue.enqueue('Bill')
    OphidianQueue.enqueue('Second Tim')
    OphidianQueue.enqueue('Bob')
    OphidianQueue.enqueue('Tyler')
    OphidianQueue.enqueue('Girl Tim')
  
    while(OphidianQueue.first !== null){
      let currValue = OphidianQueue.dequeue()
      let chance = Math.floor(Math.random() * 100) 
      console.log(OphidianQueue)
      if(chance < 25){
        OphidianQueue.enqueue(currValue)
      }
        minutes.push(currValue)
    } return minutes
  }
