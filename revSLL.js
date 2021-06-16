

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

/* Function to reverse the linked list */
function reverse(node) {
    let previous, next;
    let runner = node;
    while (runner) {
        next = runner.next;
        runner.next = previous;
        previous = runner;
        runner = next;
    }
    node = previous;
    return node;
}

function printList(node) {
    while (node) {
        console.log(node.data);
        node = node.next;
    }
    console.log("Done printing list")
}


list = new Node(85);
list.next = new Node(15);
list.next.next = new Node(4);
list.next.next.next = new Node(20);

list = reverse(list);
printList(list);

list = reverse(list);
printList(list);