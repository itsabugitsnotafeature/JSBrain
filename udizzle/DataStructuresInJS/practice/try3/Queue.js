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
        this.queue.push(data);
        return true;
    }

    dequeue(){
        if(!this.queue){
            return null;
        }
        let item = this.queue.shift();
        return item;
    }
}