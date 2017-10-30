'use strict'

// import Queue from './Users/youdizzle/development/mygit/itsaBug/JSBrain/udizzle/DataStructuresInJS/practice/try4/Queue'
import Queue from './Queue'

class TreeNode {
    constructor(data) {
        this.data = data || null;
        this.parent = null;
        this.children = new Array();
    }
}

export default class Tree {
    constructor(data) {
        this.root = new TreeNode(data);
    }

    showNode(node) {
        // console.log(node.data);
        process.stdout.write("  " + node.data.toString());
    }

    depthFirst(callback) {
        if (!this.root) {
            return new Error("Initialize a queue first asshole !");
        }

        callback = callback ? callback : this.showNode;
        let currentNode = this.root;

        (function recurse(currentNode) {
            for (let i = 0; i < currentNode.children.length; i++) {
                recurse(currentNode.children[i]);
            }
            callback(currentNode);
        }(currentNode))
        return true;
    }

    breadthFirst(callback) {
        if (!this.root) {
            return new Error("Initialize a queue first asshole !");
        }

        callback = callback ? callback : this.showNode;
        let nodeQueue = new Queue(this.root);
        let current = nodeQueue.dequeue();

        while (current) {
            for (let i = 0; i < current.children.length; i++) {
                nodeQueue.enqueue(current.children[i]);
            }
            callback(current);
            current = nodeQueue.dequeue();
        }
        return true;
    }

    add(nodeData, parentData, traversalMethod) {
        if (!this.root) {
            return new Error("Initialize a queue first asshole !");
        }
        // Mistake 1
        traversalMethod = traversalMethod ? traversalMethod : this.depthFirst;

        let insertNodeCallback = (parentNode) => {
            if (parentNode.data === parentData) {
                let newChildNode = new TreeNode(nodeData);
                parentNode.children.push(newChildNode);
            }
        }

        if (traversalMethod.call(this, insertNodeCallback)) {
            // console.log("Inserted!");
            return true;
        }
        return false;
    }

    remove(nodeData, traversalMethod) {
        if (!this.root) {
            return new Error("Initialize a queue first asshole !");
        }

        traversalMethod = traversalMethod ? traversalMethod : this.breadthFirst;
        let parent = null;
        let childIndex = null;

        let tagParentCallback = (parentNode) => {
            for (let i = 0; i < parentNode.children.length; i++) {
                if (parentNode.children[i].data === nodeData) {
                    parent = parentNode;
                    childIndex = i;
                }
            }
        }

        traversalMethod.call(this, tagParentCallback);

        if (!parent) {
            return false;
        }

        parent.splice(childIndex, 1);
        return true;
    }

    // lowestCommonAnsistor(firstNode, secondNode) {
    //     return true;
    //     // TODO
    // }

    static lowestCommonAnsistor(treeNode, n1, n2) {
        // Base case
        if (treeNode == null) {
            return null;
        }

        // If either n1 or n2 matches with root's key, report
        // the presence by returning root (Note that if a key is
        // ancestor of other, then the ancestor key becomes LCA
        if (treeNode.data == n1 || treeNode.data == n2){
            return treeNode;
        }


        // Look for keys in left and right subtrees
        let left_lca  = Tree.lowestCommonAnsistor(treeNode.children[0], n1, n2);
        let right_lca = Tree.lowestCommonAnsistor(treeNode.children[1], n1, n2);

        // If both of the above calls return Non-NULL, then one key
        // is present in once subtree and other is present in other,
        // So this node is the LCA <<<< SOLUTION 
        if (left_lca && right_lca){
            return treeNode;
        }

        // Otherwise check if left subtree or right subtree is LCA
        return (left_lca != null) ? left_lca : right_lca;
    }

}

