'use strict'

import Queues from './Queues';

class TreeNode {
    constructor(data){
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}

class Tree{

    constructor(data){
        this._root = new TreeNode(data);
    }

    traverseDepthFirst(myCallback){
        if(!this._root){
            console.log("No TREE IN EXISTANCE DUMBASS !");
            return;
        }

        let thisCallback = (node) => {
            console.log("Tree Data => " + node.data);
        }

        thisCallback = myCallback ? myCallback : thisCallback;
        let currentTree = this._root;
        
        (function recurse(currentTree) {
            for(let i=0 ; i< currentTree.children.length ; i++){
                recurse(currentTree.children[i]);
            }
            thisCallback(currentTree);
        })(this._root);
    };

    traverseBreadthFirst(myCallback){
        if(!this._root){
            console.log("No TREE IN EXISTANCE DUMBASS !");
            return;
        }

        let thisCallback = (node) => {
            console.log("Tree Data => " + node.data);
        }

        thisCallback = myCallback ? myCallback : thisCallback;

        let myQue = new Queues;
        myQue.enqueue(this._root);
        debugger
        let currentTree = myQue.dequque();

        while(currentTree){
            for(let i=0; i < currentTree.children.length ; i++){
                myQue.enqueue(currentTree.children[i]);
            }
            thisCallback(currentTree);
            currentTree = myQue.dequque();
        }
    };

    contains(myCallback, traversalMethod){
        traversalMethod.call(this, myCallback);
    };

    add(data, toData, traversalMethod){
        let childNode = new TreeNode(data);
        let parent = null;

        let setParent = (treeNode) => {
            if(treeNode.data === toData){
                parent = treeNode;
            }
        };

        this.contains(setParent, traversalMethod);

        if(!parent){
            console.log("No parent found with data item => " + toData);
            return;
        } else {
            parent.children.push(childNode);
            childNode.parent = parent;
        }
    };

    remove(data, fromData, traversalMethod){
        let parent = null;
        let setParent = (treeNode) => {
            if(treeNode.data = fromData){
                parent = treeNode;
            }
        };

        this.contains(setParent, traversalMethod);

        if(!parent){
            console.log("No parent found with data item => " + toData);
            return;
        } else {
            let removeIndex = null;
            let deletedNode = null;
            for(let i=0 ; i<parent.children.length ; i++){
                if(parent.children[i].data === data){
                    removeIndex = i;
                    break;
                }
            }

            if(removeIndex === null){
                console.log("The Parent: " + fromData + 
                    " has no child with value: " + toData);
            } else {
                deletedNode = parent.children.splice(removeIndex, 1);
                console.log("Node deleted !");
                
            }
            return deletedNode;
        }
    }
}


let t1 = new Tree(15);
t1.add(11, 15, t1.traverseDepthFirst);
t1.add(12, 15, t1.traverseDepthFirst);
t1.add(13, 15, t1.traverseDepthFirst);
t1.add(14, 15, t1.traverseDepthFirst);
t1.add(3, 11, t1.traverseDepthFirst);
t1.add(4, 11, t1.traverseDepthFirst);
t1.add(5, 12, t1.traverseDepthFirst);
t1.add(6, 12, t1.traverseDepthFirst);
t1.add(7, 12, t1.traverseDepthFirst);
t1.add(8, 13, t1.traverseDepthFirst);
t1.add(9, 13, t1.traverseDepthFirst);
t1.add(1, 8, t1.traverseDepthFirst);
t1.add(2, 8, t1.traverseDepthFirst);
t1.add(10, 14, t1.traverseDepthFirst);
/* 
TREE Structure
|
└-- 15 ( ROOT)
    |
    ├─-- 11-┬- 3
    |       └- 4
    |
    ├─-- 12-┬- 5
    |       ├─-6
    |       └- 7
    |
    ├─-- 13-┬- 8 --┬- 1
    |       └- 9   └- 2     
    |
    └- -- 14 -- 10

*/
console.log("\n\n Traversing Depth First !")
t1.traverseDepthFirst();

console.log("\n\n Breadth Depth First !")
t1.traverseBreadthFirst();
