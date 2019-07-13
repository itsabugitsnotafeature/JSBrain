'use strict'

const Queue = require('./Queue.js').Queue;


class TreeNode{
    constructor(data){
        this.data = data;
        this.parent = null;
        this.children = new Array();
    }
}

class Tree {
    constructor(data){
        this.root = new TreeNode(data);
    }

    showNode(node){
        process.stdout.write(" => " + node.data);
    }

    depthFirst(callback, fastFail){
        if(!this.root){
            return new Error("No Tree Defnined");
        }
        callback = callback || this.showNode;

        (function recursive(current, fastFail){
            // console.log(" DepthFrist Traversing node => " + current.data );

            if(fastFail && callback(current)){
                // console.log("\n node added => returning now \n\n ");
                return;
            }

            for(let i=0 ; i<current.children.length ; i++){
                recursive(current.children[i], fastFail);
            }

            callback(current);
        })(this.root, fastFail);
        return;
    }

    breadthFirst(callback, fastFail){
        if(!this.root){
            return new Error("No Tree Defnined");
        }
        callback = callback || this.showNode;

        let q = new Queue(this.root);
        let current = q.dequeue();

        while(current){
            if(fastFail && callback(current)){
                break;
            }
            for(let i=0 ; i<current.children.length ; i++){
                q.enqueue(current.children[i]);
            }
            callback(current);
            current = q.dequeue();
        }
        return;
    }

    add(data, parentData, traversalMethod){
        // console.log(" **** BEGINNIGN TO INSERT NODE DATA -- " + data + " **** " );
        if(!this.root){
            return new Error("No Tree Defnined");
        }
        traversalMethod = traversalMethod || this.depthFirst;

        let addCallback = (node) => {
            if(node.data === parentData){
                let newChildnode = new TreeNode(data);
                newChildnode.parent = node;
                node.children.push(newChildnode);
                // console.log(" >>> Node successfully inserted ! ");
                return true;
            } else {
                // console.log("    NOT THE RIGHT NODE ");
                return false;
            }
        }
        traversalMethod.call(this, addCallback, true);
        return;
    }

    remove(childData, traversalMethod) {
        if(!this.root){
            return new Error("No Tree Defnined");
        }
        traversalMethod = traversalMethod || this.breadthFirst;
        let parentNode = null;
        let childIndex = null;

        let deleteCallback = (node) => {
            for (let i=0 ; i<node.children.length ; i++){
                if(node.children[i].data === childData){
                    parentNode = node;
                    childIndex = i;
                    return true;
                } else {
                    return false;
                }
            }
        }

        traversalMethod.call(this, deleteCallback, true);

        if(parentNode !== null){
            parentNode.children.splice(childIndex, 1);
            return true;
        } else { 
            return false;
        }
    }

    static lca(node, a, b){
        if(!node){
            return null;
        }
        if(node.data === a || node.data ===b){
            return node;
        }
        let leftLca = Tree.lca(node.children[0], a, b);
        let rightLca = Tree.lca(node.children[1], a, b);
        if(leftLca!==null && rightLca!==null){
            return node;
        }
        return ( leftLca!==null ) ? (Tree.lca(node.children[0], a, b)) : (Tree.lca(node.children[1], a, b));
    }

}


module.exports = {
    Tree
}





// let q1= new Queue(1);
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(4);
// console.log(JSON.stringify(q1))
// q1.dequeue();
// console.log(JSON.stringify(q1))