'use strict'

class Queue {
    constructor(data){
        this.queue = new Array();
        this.queue.push(data);
    }

    enqueue(data){
        if(!this.queue){
            return new Error("No Queue defined");
        }
        this.queue.push(data);
        return true;
    }

    dequeue(){
        if(!this.queue){
            return new Error("No Queue defined");
        }
        let poppedItem = this.queue.shift();
        return poppedItem;
    }
}

module.exports = {
    Queue
}