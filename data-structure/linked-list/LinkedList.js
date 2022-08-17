class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // O(1)
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    // O(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return
        }

        let removedNode;

        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }

        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty!')
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();

console.log(`Linked List is Empty? ${list.isEmpty()}`);
console.log(`Size of Linked List ${list.getSize()}`);
list.print();
// list.prepend(10);
// list.append(10);
// list.print();
// list.prepend(20);
// list.append(20);
// list.print();
// list.prepend(30);
// list.append(30);
// list.print();

list.insert(10, 0);
list.insert(20, 0);
list.print();
list.insert(30, 1);
list.print();
console.log(list.removeFrom(0));
list.print();
console.log(list.getSize());
console.log(list.removeFrom(1));
console.log(list.getSize());
console.log(list.removeFrom(100)); // undefined (No index equals 100)
list.insert(10, 0);
list.insert(20, 0);
list.insert(30, 0);
list.insert(40, 0);
list.print();
list.removeValue(10);
list.print();
console.log(list.getSize());
list.removeValue(40);
list.print();
console.log(list.getSize());
list.removeValue(30);
list.print();
console.log(list.getSize());

console.log('Search Methods....');

console.log(list.search(20));
console.log(list.search(30));
console.log(list.search(100)); // Not found
console.log(list.getSize());

list.print();
list.reverse();
list.print();