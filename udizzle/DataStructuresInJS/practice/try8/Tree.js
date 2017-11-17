'use strict'
import Queue from "./Queue";


class TreeNode {
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
        console.log("node => " + node.data);
    }

    depthFirst(callback){
        
        if(!this.root){
            console.error("No Tree defined");
            return null;
        }
        callback = callback ? callback : this.showNode;

        let currentNode = this.root;
        
        (function recurse(currentNode){
            for(let i=0; i < currentNode.children.length ; i++){
                
                recurse(currentNode.children[i]);
            }
            callback(currentNode);
        })(currentNode)

        return true;
    }


    breadthFirst(callback){
        if(!this.root){
            console.error("No Tree defined");
            return null;
        }
        callback = callback ? callback : this.showNode;

        let nodeQueue = new Queue(this.root);
        let currentNode = nodeQueue.dequeue();
        
        while (currentNode){
            for(let i=0; i<currentNode.children.length ; i++){
                nodeQueue.enqueue(currentNode.children[i]);
            }
            callback(currentNode);
            currentNode = nodeQueue.dequeue();
        }
        return true;
    }

    addLeaf(data, parentData, traversalMethod){
        if(!this.root){
            console.error("No Tree defined");
            return null;
        }
        traversalMethod = traversalMethod ? traversalMethod : this.depthFirst;

        let insertLeafCallback = (node) => {
            if(node.data === parentData) {
                let thisChild = new TreeNode(data);
                node.children.push(thisChild);
            }
        }

        traversalMethod.call(this, insertLeafCallback);
        return true;
    }

    deleteLeaf(childData, parentData, traversalMethod){
        if(!this.root){
            console.error("No Tree defined");
            return null;
        }
        traversalMethod = traversalMethod ? traversalMethod : this.depthFirst;
        let parent = null;
        let childIndex = null;

        let deleteLeafCallback = (node) => {
            if(node.data === parentData){
                for(let i=0; i<node.children.length ; i++){
                    if(node.children[i].data === childData){
                        childIndex = i;
                        parent = node;
                    }
                }
            }
        }

        traversalMethod.call(this, deleteLeafCallback);

        if(parent){
            parent.children.splice(childIndex,1);
            return true;
        } else {
            return false;
        }
        
    }

    // ONLY works for binary tree
    static lowestCommonAncestor( parent, node1, node2 ){
        /*  
            Step 1: Return null if current node is null
        */
        
        /*
            Step 2: Check if either node is currently the parent node,
                Then that one is going to be the Acnestor
        */

        /*
            Step 3: Calculate LCA with 1st and 2nd child of parent
                IF (both return NON-NULL values)
                    return current parent as LCA
                ELSE
                    if (child1_LCA === null)
                        return child2_LCA
                    else
                        return child1_LCA
        */

        /* 
            REVISION:
            1. if parent = null/undefined, return null.
            2. if ((node1 || node2) === parent), return parent as LCA.
            3. Calculate lca_parent_child0, lca_parent_child1,
                if both are non-null,
                    return parent
                else
                    return which ever is not null
        */
        
        if(parent === null || parent === undefined){
            return null;
        }

        if ( node1 === parent.data || node2 === parent.data ){
            return parent;
        }

        let child0_lca = Tree.lowestCommonAncestor( parent.children[0], node1, node2 );
        let child1_lca = Tree.lowestCommonAncestor( parent.children[1], node1, node2 );

        if( (child1_lca !== null) && (child0_lca !== null) ){
            return parent;
        }

        return (child1_lca === null ? child0_lca : child1_lca);
    }

}

export default Tree;