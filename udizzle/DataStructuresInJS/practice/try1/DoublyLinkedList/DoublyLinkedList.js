'use strict'

class DllNode {
    constructor(data) {
        this.data = data || null;
        this.prev = null;
        this.next = null;
    }
}

export default class DoublyLinkedList {
    
    constructor(data) {
        this.head = new DllNode();
        this.head.data = data || null;
    }

    addNodeToLast(data){
        if(!this.head){
            return null;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }

        let node = new DllNode(data);
        node.prev = current;
        current.next = node;
        return this.head;
    }

    addNodeBeginning(data){
        if(!this.head){
            return null;
        }

        let node = new DllNode(data);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        
        return this.head;
    }

    printAll(){
        if(!this.head){
            return null;
        }

        let current = this.head;
        let index = 1;
        while(current.next !== null){
            console.log("\nSTART");
            console.log("Node Number #" + index);
            if(current.prev !== null){
                console.log("Prev =>" +  current.prev.data);
            } else {
                console.log("Prev =>" +  'null');
            }
            console.log("This =>" +  current.data);
            console.log("Next =>" +  current.next.data );

            current = current.next;
            index += 1;
        }
        console.log("\nEND");
    }

}
/* 

let testList = new DoublyLinkedList(55);
testList.addNodeToLast(66);
testList.addNodeBeginning(44);
testList.addNodeBeginning(33);

*/


// export default DoublyLinkedList;