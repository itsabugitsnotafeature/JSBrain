'use strict'

class Queue {
    constructor(data){
        this.root = new Array();
        this.root.push(data);
    }

    enqueue(data){
        if(!this.root){
            return new Error("No Queue defined");
        }
        this.root.push(data);
        return true;
    }

    dequeue(){
        if(!this.root){
            return new Error("No Queue defined");
        }
        let num = this.root.shift();
        return num;
    }
}

module.exports = {
    Queue
};