'use strict'

class llNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(data) {
        this.head = new llNode(data);
    }

    add(data) {

        if (this.head === null) {
            this.head = node;
            return
        }

        let node = new llNode(data);
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }

    addToFront(data) {

        if (this.head === null) {
            this.head = node;
            return
        }

        let node = new llNode(data);
        node.next = this.head;
        this.head = node;

        return this;
    }

    removeByPosition(position) {
        if (!this.head) {
            console.log("DEFINE A LINKED-LIST FISTT DUMBASS !");
            return;
        }

        if (position === 1) {
            let nodeToDelete = this.head;
            this.head = this.head.next;
            return nodeToDelete;
        }

        let currentNode = this.head;
        let previousNode = null;
        let currentPosition = 1;
        while (currentPosition !== position) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentPosition++;
        }

        let nodeToDelete = currentNode;
        previousNode.next = currentNode.next;
        currentNode = null;
        return nodeToDelete;
    }

    show() {
        if (!this.head) {
            console.log("DEFINE A LINKED-LIST FISTT DUMBASS !");
            return;
        }

        let currentNode = this.head;
        while (currentNode !== null) {
            process.stdout.write(" => " + currentNode.data);
            // console.log( " => " + currentNode.data);
            currentNode = currentNode.next;
        }
    }

    insertSorted(data) {
        if (this.head === null) {
            this.head = node;
            return
        }

        let node = new llNode(data);
        let current = this.head;
        let prev = this.head;

        while (current !== null && current.data < data) {
            prev = current;
            current = current.next;
        }

        prev.next = node;
        node.next = current;
    }

    static getSize(ll) {
        if (!ll.head) {
            return 0;
        }
        let curr = ll.head;
        let size = 1;
        while (curr !== null) {
            curr = curr.next;
            size++;
        }
        return size;
    }

    static addSameSizeLL(node1, node2, carry, resultList) {
        if (node1 === null) {
            return [null, 0];
        }

        let returnedList;

        [returnedList, carry] = LinkedList.addSameSizeLL(node1.next, node2.next, carry);

        let sum = node1.data + node2.data + carry;

        carry = Math.floor(sum / 10);

        sum = sum % 10;

        resultList = returnedList ? returnedList.addToFront(sum) : new LinkedList(sum);

        return [resultList, carry];
    }

    static addTwoLists(ll1, ll2) {
        let size1 = LinkedList.getSize(ll1);
        let size2 = LinkedList.getSize(ll2);

        if (size1 === size2) {
            console.log("Activating Same Size Routine!");

            let [result, carry] = LinkedList.addSameSizeLL(ll1.head, ll2.head);
            if (carry > 0) {
                result.addToFront(carry);
            }
            return result;
        } else {
            console.log("Activating DIFFERENT Size Routine!");
            let longerList;
            let shorterList;
            let longerSize;
            let shorterSize;

            if (size1 > size2) {
                longerSize = size1;
                shorterSize = size2;

                longerList = ll1;
                shorterList = ll2;
            } else {
                longerSize = size2;
                shorterSize = size1;

                longerList = ll2;
                shorterList = ll1;
            }

            let longerNode = longerList.head;
            let currSize = longerSize;

            while (currSize !== shorterSize) {
                longerNode = longerNode.next;
                currSize--;
            }

            let [result, carry] = LinkedList.addSameSizeLL(longerNode, shorterList.head);

            currSize = longerSize;
            longerNode = longerList.head;

            while (carry !== 0) {
                while (currSize !== (shorterSize + 1)) {
                    longerNode = longerNode.next;
                    currSize--;
                }
                longerNode.data += carry;
                carry = 0;
            }
            longerNode.next = result.head;
            return longerList;
        }
    }

    static reverseLinkedList_iterative(list) {
        let prev = null;
        let curr = list.head;
        let hook = list.head.next;

        while (hook !== null) {
            curr.next = prev;
            prev = curr;
            curr = hook;
            hook = hook.next;
        }
        curr.next = prev;
        prev = curr;
        list.head = prev
    }

    static reverseLinkedList_recursive(list, curr, prev) {
        /* If last node mark it head*/
        if (curr.next == null) {
            /* Update next to prev node */
            curr.next = prev;

            list.head = curr;
            return;
        }

        /* Save curr->next node for recursive call */
        let next_curr = curr.next;

        /* and update next ..*/
        curr.next = prev;

        LinkedList.reverseLinkedList_recursive(list, next_curr, curr);
        return;
    }

}

debugger
// Reversing Linked List
let ll1 = new LinkedList(1);
ll1.add(2);
ll1.add(3);
ll1.add(4);
ll1.add(5);

ll1.show();
console.log("\n\n")

LinkedList.reverseLinkedList_iterative(ll1);
ll1.show();
console.log("\n\n")

LinkedList.reverseLinkedList_recursive(ll1, ll1.head, null);
ll1.show();
console.log("\n\n")









// // Adding Two Linked Lists of DIFFERENT Length
// let ll1 = new LinkedList(1);
// ll1.add(1);
// ll1.add(1);
// ll1.add(1);
// ll1.add(1);

// let ll2 = new LinkedList(9);
// ll2.add(9);

// let sum = LinkedList.addTwoLists(ll1, ll2);

// console.log("\n\n")
// sum.show();
// console.log("\n\n")







// // Adding Two Linked Lists of SAME Length
// let ll1 = new LinkedList(5);
// ll1.add(6);
// ll1.add(3);

// let ll2 = new LinkedList(8);
// ll2.add(4);
// ll2.add(2);
// let sum = LinkedList.addTwoLists(ll1, ll2);

// console.log("\n\n")
// sum.show();
// console.log("\n\n")


// // Adding a number in order
// let ll = new LinkedList(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5);
// ll.add(8);
// ll.show();
// console.log("\n\n")
// ll.insertSorted(7);
// ll.show();
// console.log("\n\n")
// ll.insertSorted(55);
// ll.show();
// console.log("\n\n")



// // Add remove Example
// let ll = new LinkedList(3);
// ll.add(5);
// ll.add(4);
// ll.add(3);
// ll.add(2);
// ll.add(1);
// ll.show();
// console.log("\n\n")
// ll.removeByPosition(2);
// ll.show();
// console.log("\n\n")

