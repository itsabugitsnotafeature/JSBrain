'use strict'


export default class Queue {
    constructor(data){
        this.root = new Array;
        this.root.push(data);
    }

    enqueue(data){
        if(!this.root){
            console.error("No queue defined");
            return null;
        }
        this.root.push(data);
    }

    dequeue(){
        if(!this.root){
            console.error("No queue defined");
            return null;
        }
        let val = this.root.shift();
        return val;
    }
}