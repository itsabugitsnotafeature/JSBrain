'use strict'

let Tree = require("./Tree.js").Tree;
debugger
let t1 = new Tree(5);

t1.add(5,10);
t1.add(5,1);

t1.add(1, 3);
t1.add(1, 2);

t1.add(10, 9);
t1.add(10, 8);


t1.depthFirst();
console.log("\n");
t1.breadthFirst();
console.log("\n");

// t1.remove(9);

t1.depthFirst();
console.log("\n");
t1.breadthFirst();
console.log("\n");


console.log("\n");
let myLCA = Tree.lca(t1.root, 9, 8 );
console.log("LCA => " + myLCA.data );


