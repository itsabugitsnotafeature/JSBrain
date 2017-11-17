'use strict'

import Tree from './Tree'

/* 
let t1 = new Tree(2);
t1.addLeaf(1, 2);
t1.addLeaf(1, 2);
t1.addLeaf(1, 2);
t1.addLeaf(1, 2);
t1.breadthFirst();
t1.depthFirst();
t1.deleteLeaf(1, 2);
t1.depthFirst(); 
*/



let tBinary = new Tree(1);

tBinary.addLeaf(2,1);
tBinary.addLeaf(3,1);

tBinary.addLeaf(4,2);
tBinary.addLeaf(5,2);

tBinary.addLeaf(6,3);
tBinary.addLeaf(7,3);

tBinary.addLeaf(8,4);
tBinary.addLeaf(9,4);

tBinary.addLeaf(21,5);
tBinary.addLeaf(20,5);

tBinary.addLeaf(12,6);
tBinary.addLeaf(13,6);

tBinary.addLeaf(17,7);
tBinary.addLeaf(16,7);

tBinary.addLeaf(18,16);
tBinary.addLeaf(19,16);

tBinary.addLeaf(14,13);
tBinary.addLeaf(15,13);

tBinary.addLeaf(23,20);
tBinary.addLeaf(22,20);

tBinary.addLeaf(10,9);
tBinary.addLeaf(11,9);

tBinary.addLeaf(24,14);
tBinary.addLeaf(25,14);

console.log("\n\nBreadthFirst ");
tBinary.breadthFirst();
console.log("\n\n ");
debugger
let ancestor = Tree.lowestCommonAncestor(tBinary.root, 8, 9 );
console.log("\nLCA => " + ancestor.data );

ancestor = Tree.lowestCommonAncestor(tBinary.root, 24, 15 );
console.log("\nLCA => " + ancestor.data );

console.log("\n\n ");
