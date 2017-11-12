'use strict'

import Queue from './Queue';

class TreeNode {
    constructor(data){
        this.data = data;
        this.children = new Array();
        this.parent = null;
    }
}

class Tree {
    constructor(data){
        this.root = new TreeNode(data);
    }

    mycallback(node){
        // console.log("Node Val =>" + node.data);
        process.stdout.write("  " + node.data.toString());
    }

    depthFirst( callback ) {
        if(!this.root){
            console.error("No tree in existance");
        }

        callback = callback ? callback : this.mycallback;
        let current = this.root;
        (function recurse(current){
            for(let i=0 ; i<current.children.length ; i++){
                recurse(current.children[i]);
            }
            callback(current);
        })(current);
        return true;
    }

    breadthFirst(callback) {
        if(!this.root){
            console.error("No tree in existance");
        }
        callback = callback ? callback : this.mycallback;
        let queue = new Queue(this.root);
        let current = queue.dequeue();
        while(current){
            for(let i=0 ; i<current.children.length ; i++){
                queue.enqueue(current.children[i]);
            }
            callback(current);
            current = queue.dequeue();
        }
        return true;
    }

    add(val, parentVal, traversalMethod){
        if(!this.root){
            console.error("No tree in existance");
        }

        let insertCallback = (node) => {
            if(node.data === parentVal){
                let newNode = new TreeNode(val);
                node.children.push(newNode);
            }
        }

        traversalMethod = traversalMethod ? traversalMethod : this.depthFirst;

        if( traversalMethod.call(this,insertCallback) ){
            console.log("Node Inserted => " + val);
        } else {
            console.log("Something went terribaly wrong");
        }
    }

    deleteNode(nodeVal, traversalMethod){
        if(!this.root){
            console.error("No tree in existance");
        }
        let parent = null;
        let childIndex = null;

        let deleteCallback = (parentNode) => {
            for(let i=0 ; i<parentNode.children.length ; i++){
                if(parentNode.children[i].data === nodeVal){
                    parent = parentNode;
                    childIndex = i;
                }
            }
        }

        traversalMethod = traversalMethod ? traversalMethod : this.breadthFirst;

        traversalMethod.call(this, deleteCallback);

        if(parent){
            let deletedNode = parent.children.splice(childIndex, 1);
            console.log("Deleted Node => " + deletedNode[0].data);
        } else {
            console.log("No Node found !");
        }
    }
}



let t = new Tree(15);
t.add(11, 15);
t.add(12, 15);
t.add(13, 15);
t.add(14, 15);

t.add(3, 11);
t.add(4, 11);

t.add(5, 12);
t.add(6, 12);
t.add(7, 12);

t.add(8, 13);
t.add(9, 13);

t.add(10, 14);

t.add(1, 8);
t.add(2, 8);


console.log("\nDepthFirst ");
t.depthFirst();
console.log("\n\nBreadthFirst ");
t.breadthFirst();
console.log("\n\n ");


t.deleteNode(1);
console.log("\nDepthFirst ");
t.depthFirst();