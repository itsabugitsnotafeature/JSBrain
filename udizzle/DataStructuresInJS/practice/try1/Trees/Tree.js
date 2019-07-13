'use strict'

import Queue from './Queue'

class TreeNode {
    constructor(data){
        this.data = data || null;
        this.parent = null; 
        this.children = new Array();
    }
}

// export default class Tree {
class Tree {
    constructor(data){
        this.root = new TreeNode(data);
    };

    add (nodeData, toNode, traversalMethod){
        if(!this.root || !toNode){
            return false;
        }

        let newTreeNode = new TreeNode(nodeData);
        let newTreeNodeParent = null;

        let setParent = (currTreeNode) => {
            if(currTreeNode.data === toNode){
                newTreeNodeParent = currTreeNode;
            }
        };

        this.containsNode(traversalMethod, setParent);

        if(newTreeNodeParent){
            newTreeNodeParent.children.push(newTreeNode);
            newTreeNode.parent = newTreeNodeParent;
            return true;
        } else {
            return false;
        }
    };

    remove(nodeData, traversalMethod){
        if(!this.root || !node){
            return false;
        }

        let newTreeNodeParent = null;
        let setParent = (currTreeNode) => {
            if(currTreeNode.data === nodeData){
                newTreeNodeParent = currTreeNode;
            }
        };
        this.containsNode(traversalMethod, setParent);

        if(newTreeNodeParent){
            let removeIndex = null;
            for(let i=0 ; i<newTreeNodeParent.children.length ; i++){
                if (newTreeNodeParent.children.data === nodeData){
                    removeIndex = i;
                }
            }

            if(removeIndex !== null){
                newTreeNodeParent.children.splice(removeIndex,1);
                return true;
            } else {
                return false;
            }

        } else {
            return false;
        }
    };
    
    showNode(treeNode) {
        console.log("Data => " + treeNode.data);
        console.log("# Of Children => " + treeNode.children.length);
    };

    depthFirstTraversal(myCallback){
        let self = this;
        if(!this.root){
            return false;
        }
        
        let thisCallback = myCallback ? myCallback : self.showNode;
        let currentNode = this.root;

        (function recurseTree(currentNode){
            for(let i=0; i<currentNode.children.length ; i++ ){
                recurseTree(currentNode.children[i]);
            }
            thisCallback(currentNode);
        })(currentNode);
        return true;
    };

    breathFirstTraversal(myCallback){
        let self = this;
        if(!this.root){
            return false;
        }

        let thisCallback = myCallback ? myCallback : self.showNode;
        let queue = new Queue(this.root);
        let currentNode = queue.dequeue();

        while(currentNode){
            for(let i=0 ; i<currentNode.children.length ; i++){
                queue.enqueue(currentNode.children[i]);
            }
            thisCallback(currentNode);
            currentNode = queue.dequeue();
        }
        return true;
    };

    containsNode(traversalMethod, callbackMathod){
        return traversalMethod.call(this, callbackMathod);
    };
}

let myTree = new Tree(10);
myTree.depthFirstTraversal();
myTree.breathFirstTraversal();

myTree.add(11, 10, myTree.depthFirstTraversal );
myTree.add(12, 10, myTree.depthFirstTraversal );
myTree.add(13, 10, myTree.depthFirstTraversal );
myTree.depthFirstTraversal();