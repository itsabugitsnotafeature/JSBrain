'use strict'

class Queue {
    constructor(data){
        this.root = new Array();
        this.root.push(data);
    }

    enqueue(data){
        if(!this.root){
            throw new Error("Initialize a Queue first !");
            return;
        }
        this.root.push(data);
    }

    dequeue(){
        if(!this.root){
            throw new Error("Initialize a Queue first !");
            return;
        }

        let val = this.root.shift();
        return val;
    }
}

export default Queue;
// let q1 = new Queue(5);
// q1.enqueue(4);
// q1.enqueue(41);
// q1.enqueue(42);
// q1.enqueue(43);
// q1.dequeue();
// q1.dequeue();
// q1.dequeue();
// q1.dequeue();