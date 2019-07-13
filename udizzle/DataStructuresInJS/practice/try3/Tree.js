'use strict'

import Queue from './Queue';

class TreeNode {
    constructor(data){
        this.data = data;
        this.parent = null;
        this.children = new Array();
    }
}

export default class Tree {
    constructor(data){
        if(!data){
            return new Error("Initialize tree with valid root node value");
        }

        this.root = new TreeNode(data);
    }

    showNodeDebug(node){
        console.log("\n NODE DATA");
        console.log("NODE data => " + node.data);
        console.log("NODE-CHILDREN Length => " + node.children.length);
    }

    showNode(node){
        console.log(node.data);
    }

    depthFirst(callback){

        if (!this.root) {
            return null;
        }

        callback = callback ? callback : this.showNode;
        let currentNode = this.root;

        (function recurseTree(currentNode){
            for(let i=0 ; i<currentNode.children.length ; i++){
                recurseTree(currentNode.children[i]);
            }
            callback(currentNode);
        })(currentNode);

        return true;
    }

    breadthFirst(callback){
        if(!this.root){
            return null;
        }
        callback = callback ? callback : this.showNode ;
        let treeQueue = new Queue(this.root);
        let currentNode = treeQueue.dequeue();

        while(currentNode){
            for(let i=0 ; i<currentNode.children.length ; i++){
                treeQueue.enqueue(currentNode.children[i]);
            }
            callback(currentNode);
            currentNode = treeQueue.dequeue();
        }

        return true;
    }

    add(childData, parentData, traversalMethod){
        if(!this.root){
            return null;
        }

        traversalMethod = traversalMethod ? traversalMethod : this.depthFirst;
        let insertChild = function(parent){
            // console.log("ADD: Curr Node => " + parent.data);
            if(parent.data === parentData){
                let newChildNode = new TreeNode(childData);
                newChildNode.parent = parent;
                parent.children.push(newChildNode);
            }
        }

        let status = traversalMethod.call(this, insertChild);
        if(status){
            // console.log("Child successfully inserted !");
            return true;
        } else {
            // console.log("Could not Insert Child !!!!");
            return false;
        }
    }

    remove(nodeData, traversalMethod){
        if(!this.root){
            return null;
        }
        let parent = null;
        let childIndex = null;

        traversalMethod = traversalMethod ? traversalMethod : this.breadthFirst;
        let tagParentCallback = (node) => {
            // Option 1
            for (let i=0 ; i<node.children.length ; i++){
                if(node.children[i].data === nodeData){
                    parent = node;
                    childIndex = i;
                }
            }
            // Option 2
            // if(node.data === nodeData){
            //     parent = node.parent;
            // }
        }

        traversalMethod.call(this, tagParentCallback);

        if(!parent){
            console.log("CHILD NOT FOUND !!");
            return false;
        } else {
            let removedNode = parent.splice(childIndex, 1);
            return removedNode.data;
        }
    }

    showTree(traversalMethod){
        if(!this.root){
            return null;
        }
        traversalMethod = traversalMethod ? traversalMethod : this.breadthFirst;
        traversalMethod.call(this);
    }

}
