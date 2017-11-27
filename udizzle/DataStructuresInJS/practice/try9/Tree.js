'use strict'

const Queue = require('./Queue.js').Queue;

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

    showData(item) {
        // console.log(" => " + item.data);
        process.stdout.write(" => " + item.data);
    }

    depthFirst(callback) {
        if(!this.root){
            return new Error("No tree defined");
        }

        callback = callback ? callback : this.showData;

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
            return new Error("No tree defined");
        }

        callback = callback ? callback : this.showData;
        
        let queue = new Queue(this.root);
        let current = queue.dequeue();

        while(current) {
            for(let i=0 ; i<current.children.length ; i++){
                queue.enqueue(current.children[i]);
            }
            callback(current);
            current = queue.dequeue();
        }
        return true;
    }

    add(data, parentData, traversalMethod) {
        if(!this.root){
            return new Error("No tree defined");
        }
        if(!parentData){
            return new Error("No parent defined");
        }

        traversalMethod = traversalMethod ? traversalMethod : this.depthFirst;

        let insertCallback = (parentNode) => {
            if(parentNode.data === parentData){
                let newNode = new TreeNode(data);
                parentNode.children.push(newNode);
            }
        }
        
        // Made mistake here
        traversalMethod.call(this, insertCallback);
        return true;
    }
    
    remove(data, traversalMethod) {
        if(!this.root){
            return new Error("No tree defined");
        }
        if(!parentData){
            return new Error("No parent defined");
        }
        let thisParent = null;
        let childIndex = null;

        traversalMethod = traversalMethod ? traversalMethod : this.breadthFirst;

        let deleteCallback = (parentNode) => {
            for(let i=0 ; i<parentNode.children.length ; i++){
                if(parentNode.children[i].data === data){
                    thisParent = parentNode;
                    childIndex = i;
                }
            }
        }

        traversalMethod.call(this, deleteCallback);

        if(thisParent) {
            thisParent.children.splice(childIndex, 1);
            return true;
        } else {
            return new Error("No node found");
        }
    }

    // REDO LCA implementation with ALGO
    static lca(parent, a, b){
        
        if( parent === null || parent === undefined ) {
            return null;
        }
        if( (a===parent.data) || (b===parent.data) ) {
            return parent;
        }

        let leftLca = Tree.lca(parent.children[0], a, b);
        let rightLca = Tree.lca(parent.children[1], a, b);

        if(leftLca !== null && rightLca !== null){
            return parent;
        }
        return (leftLca === null) ? rightLca : leftLca;
    }
}

module.exports = {
    Tree
}
