'use strict'

class llNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this._length = 0;
        this.head = null;
    }

    add(data){
        let node = new llNode(data);
        if(this.head === null){
            this.head = node;
        } else {
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        ++this._length;
        return this.head;
    }

    removeByPosition(position){
        if(!this.head){
            console.log("DEFINE A LINKED-LIST FISTT DUMBASS !");
            return;
        }
        if(position <= 0 || position > this._length){
            console.log("DEFINE A VALID POSITION INDEX FISTT DUMBASS !");
            return;
        }
        if(position === 1){
            let nodeToDelete = this.head;
            this.head = null;
            --this._length;
            return nodeToDelete;
        }
        
        let currentNode = this.head;
        let previousNode = null;
        let currentPosition = 1;
        while(currentPosition !== position){
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentPosition++;
        }
        let nodeToDelete = currentNode;
        previousNode.next = currentNode.next;
        currentNode = null;
        // delete currentNode;
        --this._length;
        return nodeToDelete;
    }

    show(){
        if(!this.head){
            console.log("DEFINE A LINKED-LIST FISTT DUMBASS !");
            return;
        }
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(JSON.stringify(currentNode));
            currentNode = currentNode.next;
        }
    }
}



let ll = new LinkedList();
ll.add(5);
ll.add(4);
ll.add(3);
ll.add(2);
ll.add(1);
ll.show();
ll.removeByPosition(2);
ll.show();