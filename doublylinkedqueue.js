class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      this.last.next = node.value;
      node.prev = this.last;
    }
    this.last = node;
  }


  dequeue(){
    if(this.first === null){return;}
    const node = this.first;
    this.first = this.first.next;
    this.first.prev = null;
    if(node === this.last){
      this.last = null;
    } return node.value
  }
}

function main(){
  const StarTrek = new Queue();
  StarTrek.enqueue('Kirk')
  StarTrek.enqueue('Spock')
  StarTrek.enqueue('Uhura')
  StarTrek.enqueue('Checkov')
  StarTrek.enqueue('Sulu')
  console.log(StarTrek.first)
}

main()
