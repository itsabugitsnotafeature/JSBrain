'use strict'

class Queue{
    
    constructor(data){
        this.queue = new Array();
        this.queue.push(data);
    }

    enqueue(data) {
        this.queue.push(data);
    }

    dequeue() {
        return (this.queue.shift())
    }

    show() {
        console.log(" Start " );
        this.queue.forEach(function(element) {
            console.log(" => " + element);
        }, this);
        console.log(" End " );
    }
}

export default Queue;

/* 
    TESTS
*/

// let q1 = new Queue(1);
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(4);
// q1.enqueue(5);
// q1.show();
// console.log(q1.dequeue());
// console.log(q1.dequeue());
// console.log(q1.dequeue());
// q1.show();