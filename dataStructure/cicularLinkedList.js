class Node {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next;
    }
}

class CicularLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    addLast(element) {
        const newNode = new Node(element);
        newNode.next = newNode
        if (this.isEmpty()) {
            this.head = newNode
            this.size++
        } else {
            let currentNode = this.head

            while (currentNode.next != this.head) {
                currentNode = currentNode.next
            }

            currentNode.next = newNode
            newNode.next = this.head
            this.size++
        }
    }

    addFirst(element) {
        const newNode = new Node(element)
        newNode.next = newNode
        if (this.isEmpty()) {
            this.head = newNode
            this.size++
        } else {
            let currentNode = this.head
            while (currentNode.next != this.head) {
                currentNode = currentNode.next
            }

            newNode.next = this.head
            currentNode.next = newNode
            this.head = newNode
            this.size++
        }
    }

    removeLast() {
        if (this.isEmpty()) {
            console.log('lists isEmpty')
            return
        } else {
            let currentNode = this.head
            let prevNode = null
            while (currentNode.next != this.head) {
                prevNode = currentNode
                currentNode = currentNode.next
            }

            if (prevNode == null) {
                const temp = currentNode.data
                this.head = null
                this.size--
                return temp
            } else {
                const temp = prevNode.data
                prevNode.next = this.head
                this.size--
                return temp
            }
        }
    }

    removeFirst() {
        if (this.isEmpty()) {
            console.log('lists isEmpty')
            return
        } else {
            let currentNode = this.head
            while (currentNode.next != this.head) {
                currentNode = currentNode.next
            }

            if (this.size == 1) {
                const temp = currentNode.data
                this.head = null
                this.size--
                return temp
            } else {
                const temp = this.head.data
                this.head = this.head.next
                currentNode.next = this.head
                this.size--
                return temp
            }
        }
    }

    size() {
        return this.size
    }
}


// const cicularLinkedList = new CicularLinkedList()

// cicularLinkedList.addLast(1)
// cicularLinkedList.addLast(2)
// cicularLinkedList.addLast(3)
// cicularLinkedList.removeFirst()
// cicularLinkedList.removeFirst()

// console.log(cicularLinkedList)