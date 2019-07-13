'use strict'

import Tree from './Tree'

let t1 = new Tree(2);
t1.add(1, 2);
t1.add(1, 2);
t1.add(1, 2);
t1.add(1, 2);
t1.breadthFirst();
t1.depthFirst();



// END : 0449 soft commit


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

console.log("\n\nBreadthFirst ");
tBinary.breadthFirst();
console.log("\n\n ");
debugger
let ancestor = Tree.lowestCommonAncestor(tBinary.root, 8, 9 );
console.log("\nLCA => " + ancestor.data );

ancestor = Tree.lowestCommonAncestor(tBinary.root, 24, 15 );
console.log("\nLCA => " + ancestor.data );

console.log("\n\n ");