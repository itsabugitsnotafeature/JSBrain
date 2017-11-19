'use strict'

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(rootdata){
        this.root = new Node(rootdata);
    }

    add(data){
        if(!this.root){
            console.error("No Linked List Defined");
            return;
        }
        let curr = this.root;
        while(curr.next !== null ){
            curr = curr.next;
        }
        let newNode = new Node(data);
        curr.next = newNode;
        return true;
    }

    static showList(list){
        if(!list.root){
            console.error("No Linked List Defined");
            return;
        }
        let curr = list.root;
        process.stdout.write(" HEAD ");
        while(curr !== null ){
            process.stdout.write(" ==> " + curr.data);
            curr = curr.next;
        }
        process.stdout.write(" ==> NULL ");
        return true;
    }


    static nthFromLast(list, index){
        if(!list.root || index === null || index === undefined ){
            console.error("No Linked List Defined");
            return;
        }
        let head = list.root;
        let tail = list.root;

        let temp = index;
        
        while( temp > 0){
            head = head.next;
            if(head === null){
                new Error("ERROR: Gimme a valid index dumbass !")
                return null;
            }
            temp--;
        }

        while( head !== null){
            head = head.next;
            tail = tail.next;
        }
        
        return tail.data;
    }
}

let ll = new LinkedList(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(7);
ll.add(8);
ll.add(9);
ll.add(10);
LinkedList.showList(ll);
console.log("  ");

console.log( LinkedList.nthFromLast(ll, 3) );
console.log( LinkedList.nthFromLast(ll, 4) );
console.log( LinkedList.nthFromLast(ll, 5) );
console.log( LinkedList.nthFromLast(ll, 66) );




