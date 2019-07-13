'use strict'

// Array Implementation

export default class Queue {
    constructor(data){
        // MISTAKE - 8
        // let queue = new Array();
        this.queue = new Array();
        if(data){
            queue.push(data);
        }
        // MISTAKE - 7
        // return queue;
    }

    enqueue(data){
        if(!this.queue){
            return null;
        }
        this.queue.push(data);
        return this.queue;
    }

    dequeue(){
        if(!this.queue){
            return null;
        }
        return this.queue.shift();
    }

    showQueue(){
        if(!this.queue){
            return null;
        }
        this.queue.forEach(function(element, index) {
            console.log( index + " => " + element);
        }, this);
        return true;
    }
}








