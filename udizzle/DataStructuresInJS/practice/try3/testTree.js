'use strict'

import Tree from './Tree'

let myTree = new Tree(1);


myTree.add(2, 1, myTree.depthFirst);
myTree.add(3, 1, myTree.depthFirst);
// myTree.showTree(myTree.breadthFirst);


myTree.add(4, 2, myTree.breadthFirst);
myTree.add(5, 2, myTree.breadthFirst);

console.log("\n\n\n\t depthFirst #1");
myTree.showTree(myTree.depthFirst);
// console.log("\n\t depthFirst #2");
// myTree.depthFirst();

console.log("\n\n\n\t breadthFirst #1");
myTree.showTree(myTree.breadthFirst);
// console.log("\n\t breadthFirst #2");
// myTree.breadthFirst();

console.log("\n\n\n\t ## THE END ## ");