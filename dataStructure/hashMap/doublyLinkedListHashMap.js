class Node {
    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.prev = this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0
    }

    size() {
        return this.size
    }

    get(key) {
        if (thisisEmpty()) return null
        let currentNode = this.head

        while (currentNode != null) {
            if (currentNode.key == key) {
                return {[currentNode.key]: currentNode.value}
            }
            currentNode = currentNode.next
        }
    }

    contains(key) {
        if (this.isEmpty()) return false
        let currentNode = this.head
        while (currentNode != null) {
            if (currentNode.key == key) return true
            currentNode = currentNode.next
        }
        return false
    }

    add(key, value) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node (key, value);
        } else if (this.contains(key)) {
            let currentNode = this.head
            while (currentNode != null) {
                if (currentNode.key == key) {
                    currentNode.value = value
                    return
                }
                currentNode = currentNode.next
            }
        } else {
            const newNode = new Node (key, value);
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++
    }

    remove(key) {
        if (this.isEmpty()) return null

        let currentNode = this.head

        while (currentNode != null) {
            if (currentNode.key == key) {
                const temp = currentNode
                if (this.head == this.tail) {
                    this.head = this.tail = null
                    this.size--
                    return {[temp.key] : temp.value}
                } else if (currentNode == this.head) {
                    currentNode.next.prev = null
                    this.head = currentNode.next
                    this.size--
                    return {[temp.key] : temp.value}
                } else if (currentNode == this.tail) {
                    currentNode.prev.next = null
                    this.tail = currentNode.prev
                    this.size--
                    return {[temp.key] : temp.value}
                }
                currentNode.prev.next = currentNode.next
                currentNode.next.prev = currentNode.prev
                this.size--
                return {[temp.key] : temp.value}
            }
            currentNode = currentNode.next
        }
    }
}

module.exports = DoublyLinkedList