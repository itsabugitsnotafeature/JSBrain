'use strict'

class Queue {
    constructor(data){
        this.root = new Array();
        this.root.push(data);
    }

    enqueue(data){
        if(!this.root){
            return new Error('No Queue Defined');
        }

        this.root.push(data);
        return true;
    }

    dequeue(){
        if(!this.root){
            return new Error('No Queue Defined');
        }
        var val = this.root.shift();
        return val;
    }
}

module.exports = {
    Queue
}