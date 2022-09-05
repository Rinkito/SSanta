class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(val) {
        var node = new Node(val);
        let curr;
        if (this.head == null) {
            this.head = node;
        }
        else {
            curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            current.next = node;
        }
        this.size++;
    }

    remove(elem) {
        let curr = this.head;
        let prev = null;
        while (curr) {
            if (curr.data == elem) {
                this.head = curr.next;
            }
            else {
                prev.next = curr.next;
            }
            this.size--;
            return curr.data;
        }
        prev = curr;
        curr = curr.next;
    }

    isEmpty() {
        return (this.size == 0);
    }

    lsize() {
        return this.size;
    }

    print() {
        let curr = this.head;
        let s = " ";
        while (curr) {
            s += curr.data + ", ";
            curr = curr.next;
        }
        return s;
    }
}
module.exports = LinkedList;