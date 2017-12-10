'use strict'

const Tree = require('./Tree.js').Tree;

let tBinary = new Tree(1);

tBinary.add(2,1);
tBinary.add(3,1);

tBinary.add(4,2);
tBinary.add(5,2);

tBinary.add(6,3);
tBinary.add(7,3);

tBinary.add(8,4);
tBinary.add(9,4);

tBinary.add(21,5);
tBinary.add(20,5);

tBinary.add(12,6);
tBinary.add(13,6);

tBinary.add(17,7);
tBinary.add(16,7);

tBinary.add(18,16);
tBinary.add(19,16);

tBinary.add(14,13);
tBinary.add(15,13);

tBinary.add(23,20);
tBinary.add(22,20);

tBinary.add(10,9);
tBinary.add(11,9);

tBinary.add(24,14);
tBinary.add(25,14);


console.log("\n\nDepthFirst ");
tBinary.depthFirst();
console.log("\n\nBreadthFirst ");
tBinary.breadthFirst();


// TEST REMOVE LOGIC
// tBinary.remove(24);
// tBinary.remove(25);
// console.log("\n\nDepthFirst ");
// tBinary.depthFirst();
// console.log("\n\nBreadthFirst ");
// tBinary.breadthFirst();


// TEST ANCESTOR LOGIC

let ancestor = Tree.lca(tBinary.root, 8, 9 );
console.log("\nLCA => " + ancestor.data );

ancestor = Tree.lca(tBinary.root, 24, 15 );
console.log("\nLCA => " + ancestor.data );

console.log("\n\n ");
