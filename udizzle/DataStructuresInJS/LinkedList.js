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
        return node;
    }

    removeByPosition(position){
        if(!this.head){
            console.log("DEFINE A LINKED-LIST FISTT DUMBASS !");
            return;
        }
        if(position <= 0){
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
        let currentPosition = 0;
        while(currentPosition === currentPosition){
            previousNode = currentNode;
            currentNode = currentNode.next;
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
        while(currentNode.next !== null){
            console.log(JSON.stringify(currentNode));
            currentNode = currentNode.next;
        }
    }
}



