'use strict'

// START : 04:23pm
import Queue from './Queue';


class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = new Array();
        this.parent = null;
    }
}

class Tree {
    constructor(data){
        this.root = new TreeNode(data);
    }

    showNode(node) {
        if(!node){
            console.error("No node");
            return;
        }
        process.stdout.write(" => " + node.data);
    }

    depthFirst(callback){
        if(!this.root){
            console.error("No root node");
            return;
        }

        callback = callback ? callback : this.showNode;
        let current = this.root;

        (function recurse(current){
            for(let i=0; i<current.children.length ; i++){
                recurse(current.children[i]);
            }
            callback(current);
        })(current);

        return true;
    }

    breadthFirst(callback){
        if(!this.root){
            console.error("No root node");
            return;
        }
        callback = callback ? callback : this.showNode;

        let que = new Queue(this.root);
        let current = que.dequeue();

        while(current){
            for(let i=0; i<current.children.length ; i++){
                que.enqueue(current.children[i]);
            }
            callback(current);
            current = que.dequeue();
        }
        return true;
    }

    add(nodeData, parentData, traversalMethod){
        if(!this.root){
            console.error("No root node");
            return;
        }
        traversalMethod = traversalMethod ? traversalMethod : this.depthFirst;
        
        let insertChildCallback = (thisParent) => {
            if(thisParent.data === parentData){
                let newTreeNode = new TreeNode(nodeData);
                thisParent.children.push(newTreeNode);
                // console.log("Node insertion successful!")
            }
        }
        traversalMethod.call(this, insertChildCallback);
        return true;
    }

    remove(nodeData, traversalMethod){
        if(!this.root){
            console.error("No root node");
            return;
        }

        let immediateParent = null;
        let childIndex = null;
        traversalMethod = traversalMethod ? traversalMethod : this.breadthFirst;
        
        let tagParentCallback = (thisParent) => {
            for(let i=0; i<thisParent.children.length ; i++){
                if(thisParent.children[i].data === nodeData){
                    immediateParent = thisParent;
                    childIndex = i;
                }
            }
        }

        traversalMethod.call(this, tagParentCallback);
        if(immediateParent){
            immediateParent.splice(childIndex, 1);
            console.log("Child node deleted !")
            return true;
        } else {
            console.error("Could not delete !")
            return false;
        }
    }

    /* 
        AKA LCA -> Least Common Ancestor
    */     
    static lowestCommonAncestor(currentNode, node1, node2){
        /* 
            Return null if current node is null
        */
        if(currentNode === null || currentNode === undefined ){
            return null ;
        }
        
        /* 
            if either node is same as current, that one is the ancestor
        */
        if(currentNode.data === node1 || currentNode.data === node1) {
            return currentNode;
        }

        /* 
            calc if either children return with NON-NULL LCA
        */
        let left_lca = Tree.lowestCommonAncestor(currentNode.children[0], node1, node2);
        let right_lca = Tree.lowestCommonAncestor(currentNode.children[1], node1, node2);

        if( left_lca !== null && right_lca !== null ){
            return currentNode;
        }

        return (left_lca === null ? right_lca : left_lca);
    }

}

export default Tree;


