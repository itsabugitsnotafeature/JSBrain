'use strict'
var Queue = require ('./Queue.js').Queue;

class TreeNode {
    constructor(data){
        this.data = data;
        this.parent = null;
        this.children = new Array();
    }
}


class Tree {
    constructor(data) {
        this.root = new TreeNode(data);
    }

    showNode(node){
        process.stdout.write(" => " + node.data);
    }

    depthFirst( callback ) {
        if(!this.root){
            return new Error("No Tree Root Defined");
        }
        callback = callback || this.showNode;

        (function recurse(current){
            for(let i=0 ; i<current.children.length ; i++){
                recurse(current.children[i]);
            }
            callback(current);
        })(this.root);

        return true;
    }

    breadthFirst(callback) {
        if(!this.root){
            return new Error("No Tree Root Defined");
        }
        callback = callback || this.showNode;
        let q = new Queue(this.root);
        let current = q.dequeue();

        while(current){
            for(let i=0 ; i<current.children.length ; i++){
                q.enqueue(current.children[i]);
            }
            callback(current);
            current = q.dequeue();
        }
        return true;
    }

    add(parentData, data, traversalMethod) {
        if(!this.root){
            return new Error("No Tree Root Defined");
        }
        traversalMethod = traversalMethod || this.depthFirst;

        let addCallback = (node) => {
            if(node.data === parentData){
                let newTreeNode = new TreeNode(data);
                newTreeNode.parent = node;
                node.children.push(newTreeNode);
            }
        }
        traversalMethod.call(this, addCallback);
        return;
    }

    remove(data, traversalMethod) {
        if(!this.root){
            return new Error("No Tree Root Defined");
        }
        traversalMethod = traversalMethod || this.breadthFirst;
        let parent = null;
        let childIndex = null;

        let removeCallback = (node) => {
            for(let i=0 ; i<node.children.length ; i++){
                if(node.children[i].data === data){
                    parent = node;
                    childIndex = i;
                }
            }
        }
        traversalMethod.call(this, removeCallback);

        if(parent){
            parent.children.splice(childIndex, 1);
            return true;
        } else {
            return false;
        }
    }

    static lca(curr, a, b) {
        if(!curr){
            return null;
        }
        if(curr.data === a || curr.data === b){
            return curr;
        }
        let leftLca = Tree.lca(curr.children[0], a, b );
        let rightLca = Tree.lca(curr.children[1], a, b );

        if(leftLca !== null && rightLca !== null){
            return curr;
        }

        if(leftLca !== null){
            return Tree.lca(curr.children[0], a, b );
        } else {
            return Tree.lca(curr.children[1], a, b );
        }
    }
}

module.exports = {
    Tree
}