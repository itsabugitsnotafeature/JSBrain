'use strict'

class dllNode{
    constructor(){
        this.data = null;
        this.next = null; 
        this.prev = null; 
    }
}

class DoublyLinkedList {
    constructor(){
        this._length = 0;
        this.head = null;
        this.tail = null;
    }

    add(data){
        let node = new dllNode();
        node.data = data;

        if(this.head === null) {
            // If not list existed
            if(this.tail !== null){
                let errorMessage = "Something bad happened in Doubly Linked List. Create New One !"
                throw new Error(errorMessage);
                return;
            }
            this.head = node;
            this.tail = node;
            this._length++;
            return this.head;
        }
        
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = this.tail.next;
        this._length++;
        return this.head;
    }

    showForward(){
        if(this.head === null) {
            // If not list existed
            if(this.tail !== null){
                let errorMessage = "Something bad happened in Doubly Linked List. Create New One !"
                throw new Error(errorMessage);
                return;
            }
            console.log("NO DOUBLY LINKED LIST INITIALIZED DUMBASS !!");
            return;
        }

        let currentNode = this.head;
        console.log("Showing Forward Data: \n");
        while(currentNode !== null){
            console.log(JSON.stringify(currentNode.data));
            currentNode = currentNode.next;
        }
    }

    showReverse(){
        if(this.tail === null) {
            // If not list existed
            if(this.head !== null){
                let errorMessage = "Something bad happened in Doubly Linked List. Create New One !"
                throw new Error(errorMessage);
                return;
            }
            console.log("NO DOUBLY LINKED LIST INITIALIZED DUMBASS !!");
            return;
        }

        let currentNode = this.tail;
        console.log("Showing Reverse Data: \n");
        while(currentNode !== null){
            console.log(JSON.stringify(currentNode.data));
            currentNode = currentNode.prev;
        }
    }

    remove(position){
        if(this.tail === null) {
            // If not list existed
            if(this.head !== null){
                let errorMessage = "Something bad happened in Doubly Linked List. Create New One !"
                throw new Error(errorMessage);
                return;
            }
            console.log("NO DOUBLY LINKED LIST INITIALIZED DUMBASS !!");
            return;
        }
        if(position <= 0 || position >this._length){
            console.log("Enter valid position index DUMBASS !!");
            return;
        }

        if(this._length === 1 ){
            if(position !== 1 ){
                console.log("Enter valid position index DUMBASS !!");
                this._length--;
                return;
            }
            let currentNode = this.head; 
            this.head = null;
            this.tail = null;
            this._length--;
            return currentNode;
        }

        if(position === 1 ){
            let currentNode = this.head; 
            this.head = this.head.next;
            this._length--;
            return currentNode;
        }

        let currentNode = this.head;
        let previousNode = null;
        let currenPosition = 1;
        while(currenPosition < position){
            previousNode = currentNode;
            currentNode = currentNode.next;
            currenPosition++;
        }
        let deletedNode = currentNode;
        previousNode.next = currentNode.next;
        currentNode.next.prev = previousNode;
        currentNode = null;

        this._length--;
        return deletedNode;
    }
}

let dll = new DoublyLinkedList();

dll.add(1);
dll.add(2);
dll.add(3);
dll.add(4);
dll.add(5);
dll.showReverse();
dll.showForward();  // 1 2 3 4 5 
dll.remove(1); 
dll.showForward();  // 2 3 4 5 
dll.remove(2);
dll.showForward();  // 2 4 5 
dll.remove(1);
dll.showForward();  // 4 5 
dll.remove(1);
dll.showForward();  // 5 
dll.remove(1);
dll.showForward();  // NO DOUBLY LINKED LIST INITIALIZED DUMBASS !!
dll.remove(1);      // NO DOUBLY LINKED LIST INITIALIZED DUMBASS !!
dll.showForward();  // NO DOUBLY LINKED LIST INITIALIZED DUMBASS !!

export default DoublyLinkedList;
