'use strict'

class Stack {
    constructor() {
        this._size = 0;
        this._storage = {};
    }

    push(data) {
        let size = ++this._size;
        this._storage[size] = data;
    };

    pop() {
        let size = this._size;
        let poppedNode = null;

        if (size > 0) {
            poppedNode = this._storage[size];
            delete this._storage[size];
            this._size--;
        }
        return poppedNode;
    }

    showStack() {
        if (this._size === 0) {
            console.log('NO STACK DEFINED DUMBASS !');
            return;
        }
        let size = this._size;
        for (let i = 1; i <= size; i++) {
            console.log('\nNode #' + i + " => " + JSON.stringify(this._storage[i]));
        }
    }
}

export default Stack;