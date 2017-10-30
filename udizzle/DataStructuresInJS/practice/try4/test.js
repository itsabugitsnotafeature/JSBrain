'use strict'

// import Tree from './Users/youdizzle/development/mygit/itsaBug/JSBrain/udizzle/DataStructuresInJS/practice/try4/Tree';
import Tree from './Tree';

let t = new Tree(15);

t.add(11, 15);
t.add(12, 15);
t.add(13, 15);
t.add(14, 15);

t.add(3, 11);
t.add(4, 11);

t.add(5, 12);
t.add(6, 12);
t.add(7, 12);

t.add(8, 13);
t.add(9, 13);

t.add(10, 14);

t.add(1, 8);
t.add(2, 8);

/* console.log("\nDepthFirst ");
t.depthFirst();
console.log("\n\nBreadthFirst ");
t.breadthFirst();
console.log("\n\n "); */


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

// tBinary.add(,);

console.log("\n\nBreadthFirst ");
tBinary.breadthFirst();
console.log("\n\n ");

let ancestor = Tree.lowestCommonAnsistor(tBinary.root, 8, 9 );
console.log("\nLCA => " + ancestor.data );

ancestor = Tree.lowestCommonAnsistor(tBinary.root, 24, 15 );
console.log("\nLCA => " + ancestor.data );

console.log("\n\n ");