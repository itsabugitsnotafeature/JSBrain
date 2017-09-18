'use strict'
// http://www.thatjsdude.com/interview/linkedList.html

function LinkedList(){  
  this.head = null;
}

function DoublyLinkedList(){
    this.head = null; 
}

DoublyLinkedList.prototype.push = function(val){
    node = {
        value: val,
        next: null,
        prev: null
    }
    if(!this.head){
        this.head = node;
    } else{
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = node;
        node.prev = current;
    }

}

LinkedList.prototype.push = function(val){
    let node = {
        value: val,
        next: null
    };
    if(!this.head){
        this.head = node;
    } else {
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = node;
    }
}


var sll = new LinkedList();
//push node
sll.push(2);
sll.push(3);
sll.push(4);

//check values by traversing LinkedList 
sho(sll.head); //Object {data: 2, next: Object}
sho(sll.head.next); //Object {data: 3, next: Object}
sho(sll.head.next.next); //Object {data: 4, next: null}

function sho(obj){
    console.log(JSON.stringify(obj));
}
