// class Node {
//     constructor(data, next = null, prev = null) {
//         this.data = data
//         this.next = next
//         this.prev = prev
//     }
// }

class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = this.tail = null
    }

    isEmpty() {
        return this.size == 0
    }

    addFirst(element) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node(element);
        } else {
            const newNode = new Node(element, this.head, null);
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++
    }

    addLast(element) {
        if (this.isEmpty()) {
            this.head = this.tail = new Node(element);
        } else {
            const newNode = new Node(element, null, this.tail);
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    addAt(position, element) {
        if (position > this.size || position < 0) {
            console.log('positon is out of bounds')
        }
        if (this.isEmpty() || position == 0) {
            this.addFirst(element);
        } else {
            let index
            let currentNode
            if (position < this.size / 2) {
                index = 0
                currentNode = this.head

                while (position != index) {
                    currentNode = currentNode.next
                    index++
                }
                const newNode = new Node(element, currentNode, currentNode.prev)
                currentNode.prev.next = newNode
                currentNode.prev = newNode
            } else if (position >= this.size / 2) {
                index = this.size - 1
                currentNode = this.tail

                while (position != index) {
                    currentNode = currentNode.prev
                    index--
                }

                const newNode = new Node(element, currentNode.next, currentNode)
                currentNode.next.prev = newNode
                currentNode.next = newNode

            }
            this.size ++
        }
    }

    removeFirst() {
        if (this.isEmpty()) {
            console.log('lists is empty');

        } else {
            const temp = this.head.data
            if (this.head.next == null) {
                this.head = this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            this.size--
            return temp;
        }
    }

    removeLast() {
        if (this.isEmpty()) {
            console.log('lists is empty')
            return 
        } else {
            const temp = this.tail.data
            if (this.tail.prev == null) {
                this.head = this.tail = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            this.size--
            return temp
        }
    }

    removeAt(postion) {
        if (!postion || postion > this.size || postion < 0) {
            console.log('postion out of range')
            return
        }

        if (postion == 0) {
            this.removeFirst()
        } else if (postion == this.size - 1) {
            this.removeLast()
        } else {
            let index
            let currentNode
            let temp
            if (postion < this.size / 2) {
                index = 0
                currentNode = this.head

                while (postion != index) {
                    currentNode = currentNode.next
                    index++
                }
                temp = currentNode.data
                currentNode.prev.next = currentNode.next
                currentNode.next.prev = currentNode.prev

            } else if (postion >= this.size / 2) {
                index = this.size - 1
                currentNode = this.tail

                while (postion != index) {
                    currentNode = currentNode.prev
                    index--
                }
                temp = currentNode.data
                currentNode.prev.next = currentNode.next
                currentNode.next.prev = currentNode.prev
            }

            this.size--
            return temp;
        }
    }

    indexOf(object) {
        if (this.isEmpty()) {
            console.log('lists is empty')
        } else {
            let currentNode = this.head
            let index = 0
            while (currentNode.data != object) {
                currentNode = currentNode.next
                index++
            }

            return index
        }
    }
}

