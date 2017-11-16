'use strict'

export default class Queues {
    constructor(){
        this._size = 0;
        this._storage = new Object();
    }

    enqueue(data){
        this._storage[++this._size] = data;
    }

    dequque(){
        if(this._size === 0){
            console.log('NO QUEUE DEFINED DUMBASS !');
            return null;
        }
        let node = this._storage[1];
        delete this._storage[1];
        this.reIndexQueue();
        this._size--;
        return node;
    }

    reIndexQueue(){
        let size = this._size;
        let i=1;
        while( i <= this._size -1 ){
            this._storage[i] = this._storage[i+1];
            i++;
        }
    }

    showQueue(){
        if(this._size === 0){
            console.log('NO QUEUE DEFINED DUMBASS !');
            return null;
        }
        for(let i=1 ; i<=this._size ; i++ ){
            console.log('Node #' + i + " => " + JSON.stringify(this._storage[i]));
        }
    }
}

