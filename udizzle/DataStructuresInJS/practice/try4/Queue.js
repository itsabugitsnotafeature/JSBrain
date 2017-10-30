'use strict'

export default class Queue {
    constructor(data){
        this.queue = new Array();
        this.queue.push(data);
    }

    enqueue(data){
        if(!this.queue){
            return null;
        }
        return this.queue.push(data);
    }

    dequeue(){
        if(!this.queue){
            return null;
        }
        let deletedNode =  this.queue.shift();
        return deletedNode;
    }
}