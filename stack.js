//Main class and methods

class _Node{
    constructor(data, next){
    this.data = data;
    this.next = next;
  }}
  
  class Stack {
    constructor() {
      this.top = null;
    }
    push(data){
      if(this.top === null){
        this.top = new _Node(data, null);
        return this.top;
      }
      const node = new _Node(data, this.top);
      this.top = node;
    }
    pop(){
      const node = this.top;
      this.top = node.next;
      return node.data;
    }
  }
  
  function main(){
    const StarTrek = new Stack();
    const StarWars = new Stack();
    const NumbersStack = new Stack();
  
    NumbersStack.push(3)
    NumbersStack.push(7)
    NumbersStack.push(1)
    NumbersStack.push(11)
    NumbersStack.push(5)
  
    StarTrek.push('Kirk'),
    StarTrek.push('Spock'),
    StarTrek.push('McCoy'),
    StarTrek.push('Scotty'),
    
    console.log(peek(StarTrek))
    console.log(isEmpty(StarTrek))
    console.log(isEmpty(StarWars))
    console.log(display(StarTrek))
    console.log(NumbersStack)
  
    StarTrek.pop()
    StarTrek.pop()
    console.log(peek(StarTrek))
  
  
  
  }
  
  main()

  //Helper functions
  
  function peek(stack){
    return stack.top
  }
  
  function isEmpty(stack){
    if(!stack.top){return true}
    return false
  }
  
  function display(stack){
    let prev = stack.top
    let next = stack.top
    while(next !== null){
      prev = next
      next = next.next
    }
    console.log(prev.data)
  }

  //Palindrome function
  
  function is_palindrome(input) {
      let string = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
      let newString = ''
      const PalStack = new Stack();
      for(let i = 0; i < string.length; i++){
        PalStack.push(string[i])
      }
      while(PalStack.top){
        newString += PalStack.pop()
      }
      if(string === newString){
        return true
        } return false
  }

  //Unclosed characters function
  
  function unclosedChars(input){
    let arr = input.split('')
    const CharactersStack = new Stack();
    for(i = 0; i < arr.length; i ++ ){
      if(arr[i] === '('){
        CharactersStack.push('(')}
       else if (arr[i] === '['){
        CharactersStack.push('[')}
        else if (arr[i] === '{') {
          CharactersStack.push('{')}}
    for(i = 0; i < arr.length; i ++ ){
      if(arr[i] ===')' && CharactersStack.top.data === '('){
        CharactersStack.pop()}
      else if (arr[i] === ']' && CharactersStack.top.data === '['){
        CharactersStack.pop()}
      else if (arr[i] === '}' && CharactersStack.top.data === '{'){
        CharactersStack.pop()}
      else if (arr[i] == ')' || arr[i] == ']' || arr[i] == '}'){
        return `Unopened ${arr[i]} at position ${i}`
      }}
      if(CharactersStack.top){return `Unclosed ${CharactersStack.top.data}`} else return('All good')
      }
  
  console.log(is_palindrome('racecar'))
  console.log(is_palindrome('donkey'))
  
  console.log(unclosedChars('ab({jkl)})ab'))


   //Create queue using two stacks
  
  function queueStack(Queue){
    const SortQueue = new Stack();
    while(Queue.top !== null){
      let value = Queue.pop()
      SortQueue.push(value)
    }  
    return SortQueue.pop()
  }
  
  function setUpQueueStack(){
    const Queue = new Stack()
  
    Queue.push('Value inserted first')
    Queue.push('Value inserted second')
    Queue.push('Value inserted third')
  
    return queueStack(Queue)
  }
  
  console.log(setUpQueueStack())
  

  //Sort stack

  function setUpSort(Stack){
      const Sorted = new Stack()

      function doSort(newStack){
          if(newStack.top.next === null){
              return Sorted.push(newStack.top.value)
          }
          let curr = newStack.top
          let prev = newStack.top
          let most = newStack.top
          while(curr !== null){
              if(most.value < curr.value){
                  most = curr
                  next = curr.next
              }
              prev = curr
              curr = curr.next
          }
          Sorted.push(max.value)
          curr = temp.top
          while(curr.value !== most.value){
              prev = curr
              curr = curr.next
          }
          prev.next = curr.next
          display(newStack.top)
          doSort(newStack)
      } doSort(Stack)
        return newStack
  }
  