'use strict'

class Queue {
    constructor(data){
        this.root = new Array();
        this.root.push(data);
    }

    enqueue(data) {
        if(!this.root){
            console.error("No root node");
            return;
        }
        this.root.push(data);
    }

    dequeue(){
        if(!this.root){
            console.error("No root node");
            return;
        }

        let item = this.root.shift();
        return item;
    }
}

export default Queue;