'use strict'
import Queue from './Queue'

class TreeNode {
    constructor (data){
        if(!data){
            new Error('Please initialize with root value!')
        }
        this.data = data;
        this.parent = null;
        this.children = new Array();
    }
}

export default class Tree {
    constructor(data){
        if(!data){
            new Error('Please initialize with root value!')
        }
        this.root = new TreeNode(data);
        // MISTAKE - 1
        // return this.root
    }

    showNode(node){
        console.log("Data => " + node.data || null );
    }

    depthFirst(callback){
        if(!this.root){
            return null;
        }

        let myCallback = callback ? callback : this.showNode;
        let current = this.root;
        
        // MISTAKE - 4
        // (function recurse(){
        (function recurse(current){
            for(let i=0 ; i< current.children.length ; i++){
                recurse(current.children[i]);
            }
            myCallback(current);
        }(current));
        return true;
    }

    breadthFirst(callback){
        if(!this.root){
            return null;
        }

        let myCallback = callback ? callback : this.showNode;
        let nodeQueue = new Queue();
        nodeQueue.enqueue(this.root);

        let current = nodeQueue.dequeue();
        while(current){
            for(let i=0 ; i<current.children.length ; i++){
                nodeQueue.enqueue(current.children[i]);
            }
            myCallback(current);
            current = nodeQueue.dequeue();
        }
        return true;
    }

    addNode(data, toParent, traversalMethod){
        if(!this.root){
            return null;
        }
        
        traversalMethod = traversalMethod ? traversalMethod : this.showNode;

        let insertCallback = (parentNode) => {
            // MISTAKE - 6
            // if(parentNode === toParent){
            if(parentNode.data === toParent){
                let newChilNode = new TreeNode(data);
                newChilNode.parent = parentNode;
                parentNode.children.push(newChilNode);
                return true;
            }
        }
        // MISTAKE - 2
        // traversalMethod(insertCallback);
        traversalMethod.call(this, insertCallback);
        return false;
    }

    deleteNode(nodeData, traversalMethod){
        if(!this.root){
            return null;
        }
        let parent = null;
        let childIndex = null;

        traversalMethod = traversalMethod ? traversalMethod : this.showNode;

        let insertCallback = (parentNode) => {
            for(let i=0 ; i<parentNode.children.length ; i++){
                if(parentNode.children[i].data === nodeData){
                    parent = parentNode;
                    childIndex = i;
                }
            }
        }
        // MISTAKE - 3
        // traversalMethod(insertCallback);
        traversalMethod.call(this,insertCallback);

        if(!parent){
            return null;
        }

        let deletedNode = parentNode.splice(childIndex, 1);
        return deletedNode;
    }

    showTree(traversalMethod){
        traversalMethod = traversalMethod ? traversalMethod : this.showNode;
        // MISTAKE - 5
        // traversalMethod();
        traversalMethod.call(this);
    }
}

/* 
    TEST
*/

// debugger
// let myTree = new Tree(10);
// myTree.addNode(7, 10, myTree.depthFirst);
// myTree.addNode(8, 10, myTree.depthFirst);
// myTree.addNode(9, 10, myTree.depthFirst);
// console.log("\n\n\t showTree depthFirst 1");
// myTree.showTree(myTree.depthFirst);


// myTree.addNode(1, 7, myTree.breadthFirst);
// myTree.addNode(2, 7, myTree.breadthFirst);

// myTree.addNode(3, 8, myTree.breadthFirst);
// myTree.addNode(4, 8, myTree.breadthFirst);

// myTree.addNode(5, 9, myTree.depthFirst);
// myTree.addNode(6, 9, myTree.depthFirst);

// console.log("\n\n\t showTree breadthFirst 2");
// myTree.showTree(myTree.breadthFirst);

// console.log("\n\n\t breadthFirst 3");
// myTree.breadthFirst();

// console.log("\n\n\t depthFirst 4");
// myTree.depthFirst();


