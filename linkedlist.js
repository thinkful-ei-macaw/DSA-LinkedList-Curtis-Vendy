class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  //insert at the beginning
  insertFirst(item){
    //create new node and point head to new node
    this.head = new Node(item, this.head);
  }
  insertBefore(item, name){
    //check if has list
    if(this.head === null){
      this.insertFirst(item);
    }
    //keep track of currNode
    let currNode = this.head;
    //keep track of previous node
    let previousNode = this.head;
    //iterate through until end
    while((currNode !== null) && (currNode.value !== item)){
      //save previous node
      previousNode = currNode;
      //move onto next node
      currNode = currNode.next;
    }
    return previousNode.next = new Node(name,currNode);
  }
  insertAfter(item, name){
    //check if has list
    if(this.head === null){
      this.insertFirst(item);
    }
    //keep track of currNode
    let currNode = this.head;
    //keep track of previous node
    let previousNode = this.head;
    //iterate through until end
    while((currNode !== null) && (currNode.value !== item)){
      //save previous node
      previousNode = currNode;
      //move onto next node
      currNode = currNode.next;
    }
    return currNode.next = new Node(name,currNode.next);
  }
  insertAt(name,index){
    let currNode = this.head;
    let count = 0;
    //check if index has num
    
    
    while(currNode.next !== null){
      if(count < index-1){ //at node before 
        currNode = currNode.next;
        count++;
      } else{
        //connect new node to node after selected
        const newNode = new Node(name, currNode.next.next);
        //disconnect node to node after
        currNode.next.next = null;
        //connect new node to node before 
        currNode.next = newNode;
        return newNode;
      }
    }
    
    
  }
  insertLast(item){
    //check if has list
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      //start at the beginning of the list
      let tempNode = this.head;
      //iterate until reach the end
      while(tempNode.next !== null){
        //traverse through list, setting tempNode to next node that does not have address of null
        tempNode = tempNode.next;
      }
      //set the end node's next pointer to the new node
      tempNode.next = new Node(item, null);
    }
  }
  remove(item){
    //if list is empty
    if(!this.head){
      return null;
    }
    //if node to be removed is head, 
    //make next node head 
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    //item is the node
    let currNode = this.head;
    //keep track of previous node
    let previousNode = this.head;

    while((currNode !== null) && currNode.value !== item){
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  find(item){
    //start at the head
    let currNode = this.head;
    //check if the list is empty
    if(!this.head){
      return null;
    }
    //check for the item
    while(currNode !== null){
      if(currNode.value=== item){
        //found the node!!
        return currNode;
      }
      //return null if at end of list
      //and item is not on the list
      if(currNode.next === null){
        return null;
      }
      else{
        //keep looking 
        currNode = currNode.next;
      }
    }
    
  }

}

function main(){
  let ll = new LinkedList();
  ll.insertFirst('Apollo');
  ll.insertLast('Boomer');
  ll.insertLast('Helo');
  ll.insertLast('Husker');
  ll.insertLast('Starbuck');
  ll.insertLast('Tauhida');
  ll.remove('squirrel');
  ll.insertBefore('Boomer', 'Athena');
  ll.insertAfter('Helo', 'Hotdog');
  ll.insertAt('Kat', 3);
  ll.remove('Tauhida');
  printNode(ll);
  console.log(sizeLL(ll));
  console.log(isEmpty(ll));
  console.log(findPrevious(ll,'Kat'));
  console.log(findLast(ll));
}

//display
function printNode(linkedlist){
  let node = linkedlist.head;
  while(node !== null){
    console.log(node.value);
    node = node.next;
  }

}

//recursive display
function print(n){
  if(n){
    console.log(n.value);
    print(n.next);
  } else{
    return;
  }
}
//get size
function sizeLL(ll){
  let currNode = ll.head;
  let count=0;
  
  while(currNode !== null){
    currNode = currNode.next;
    count++;
  }
  return count;
}

//is empty
function isEmpty(ll){
  if(ll.head === null){
    return 'linked list is empty';
  } else{
    return `linked list is not empty and contains ${sizeLL(ll)} nodes.`;
  }
}

function findPrevious(ll, n){
  let currNode = ll.head;

  if(ll.head === null){
    return;
  }

  while((currNode !== null) && (currNode.next !== null)){
    if(currNode.next.value===n){
      return currNode.value;
    }
    currNode = currNode.next;   
  }
}

function findLast(ll){
  let currNode = ll.head;

  if(currNode === null){
    return;
  }

  while((currNode !== null)){
    if(currNode.next === null){
      return currNode.value;
    }
    currNode = currNode.next;
  }
}
main();

// D->E->M->N-S
//input: 5->10->15->18->25
//output: 5->10->11->18->25

//Insert Sorted Order
//best way to clarify assumption
////need sample input and output this is what Q is asking?
//start at the head
//find the insertion points
//have two points - previous, current
//compare if current is less than the item 
//example item is 11, head at this point will b prev
//when i find my insertion point
//create a new node
//attach the new nodes next point to C
//previous node's next point will attach  to new node
//iterate until we find the insertion point
// function insertInSortedOrder(sortedSLL, item){
//   let previous, current = this.head;
//   if(sortedSLL.head.value => item){
//     sortedSLL.head = new_node(item, sortedSLL.head)
//   }
//   while(current.value < item ){
//     previous = current;
//     current = current.next;
//   }
//   previous.next = new _Node (item, current);
//}