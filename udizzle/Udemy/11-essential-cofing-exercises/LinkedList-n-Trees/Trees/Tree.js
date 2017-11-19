'use strict'


class BinaryTreeNode {
    constructor(data){
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinaryTree {
    constructor(data){
        this.root = new BinaryTreeNode(data);
    }

    showNode(node){
        process.stdout.write( " => " + node.data);
    }

    depthFirstTraversal(callback){
        if(!this.root){
            console.log("NO TREE DEFINED!");
            return;
        }
        callback = callback ? callback : this.showNode;
        let current = this.root;

        (function recurse(current){
            if(current.leftChild){
                recurse(current.leftChild);
            }
            if(current.rightChild){
                recurse(current.rightChild);
            }
            callback(current);
        })(current);
        
        return true;
    }

    addNode(data, parentData, isLeftChild){
        if(!this.root){
            console.log("NO TREE DEFINED!");
            return;
        }

        let insertCallback = (parent) => {
            if(parent.data === parentData){
                let newChild = new BinaryTreeNode(data);
                if(isLeftChild){
                    parent.leftChild = newChild;
                } else {
                    parent.rightChild = newChild;
                }
            }
        }

        this.depthFirstTraversal(insertCallback);
    }

    static isBinarySearchTree(root, lowerLimit, upperLimit){
        if(lowerLimit && root.data < lowerLimit){
            return false;
        }
        if(upperLimit && root.data > upperLimit){
            return false;
        }

        let isLeft_bst = true;
        let isRight_bst = true;

        if(root.leftChild){
            isLeft_bst = BinaryTree.isBinarySearchTree(root.leftChild, lowerLimit, root.data);
        }
        if(root.rightChild){
            isRight_bst = BinaryTree.isBinarySearchTree(root.rightChild, root.data, upperLimit);
        }
        return (isLeft_bst && isRight_bst );
    }
}

let tt = new BinaryTree(3);
tt.addNode(1, 3, true);
tt.addNode(5, 3, false);

tt.addNode(0, 1, true);
tt.addNode(2, 1, false);

tt.addNode(4, 5, true);
tt.addNode(6, 5, false);

tt.depthFirstTraversal();
console.log("\n\n")

console.log(BinaryTree.isBinarySearchTree(tt.root));


debugger
let tt1 = new BinaryTree(4);
tt1.addNode(1, 4, true);
tt1.addNode(5, 4, false);

tt1.addNode(0, 1, true);
tt1.addNode(2, 1, false);

tt1.addNode(3, 5, true);
tt1.addNode(6, 5, false);

tt1.depthFirstTraversal();
console.log("\n\n")
console.log(BinaryTree.isBinarySearchTree(tt1.root));