'use strict'

import Tree from './Tree'

let myTree = new Tree(10);
myTree.addNode(7, 10, myTree.depthFirst);
myTree.addNode(8, 10, myTree.depthFirst);
myTree.addNode(9, 10, myTree.depthFirst);
console.log("\n\n\t showTree depthFirst 1");
myTree.showTree(myTree.depthFirst);


myTree.addNode(1, 7, myTree.breadthFirst);
myTree.addNode(2, 7, myTree.breadthFirst);

myTree.addNode(3, 8, myTree.breadthFirst);
myTree.addNode(4, 8, myTree.breadthFirst);

myTree.addNode(5, 9, myTree.depthFirst);
myTree.addNode(6, 9, myTree.depthFirst);

console.log("\n\n\t showTree breadthFirst 2");
myTree.showTree(myTree.breadthFirst);

console.log("\n\n\t breadthFirst 3");
myTree.breadthFirst();

console.log("\n\n\t depthFirst 4");
myTree.depthFirst();











