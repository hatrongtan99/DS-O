class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class SingleLinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    addFirst(element) {
        if (this.isEmpty()) {
            this.head = new Node(element)
            this.size ++
        } else {
            const newNode = new Node(element, this.head)
            this.head = newNode
            this.size ++
        }
    }

    addLast(element) {
        if (this.isEmpty()) {
            this.head = new Node(element);
        } else {
            let lastNode = this.head
            while (lastNode.next != null) {
                lastNode = lastNode.next
            }
            lastNode.next = new Node(element);
        }
        this.size++
    }

    addAt(position ,element) {
        if (position > this.size || position < 0) {
            console.log('position is out of bounds')
        }
        if (this.isEmpty()) {
            this.head = new Node(element);
            this.size ++
        } else {
            let index = 0
            let lastNode = this.head;
            let prevNode = null
            while (position != index) {
                prevNode = lastNode
                lastNode = lastNode.next;
                index++
            }
            if (prevNode == null) {
                this.addFirst(element)
                return
            }
            prevNode.next = new Node(element, lastNode)
            this.size ++
        }
    }

    removeFirst() {
        if (this.isEmpty()) {
            console.log('lists is empty!')
        } else {
            const temp = this.head.data
            this.head = this.head.next
            this.size--
            return temp
        }
    }

    removeLast() {
        if (this.isEmpty()) {
            console.log('lists is empty!')
        } else {
            let lastNode = this.head
            let prevNode = null
            while (lastNode.next != null){
                prevNode = lastNode
                lastNode = lastNode.next
            }

            const temp = lastNode.data
            if (prevNode == null) {
                this.head = null
                this.size --
                return;
            }
            prevNode.next = null
            this.size--
            return temp
        }
    }

    removeAt(position) {
        if (position > this.size || position < 0) {
            console.log('position is out of bounds')
            return
        }
        if (this.isEmpty()) {
            console.log('list is empty')
        } else {
            let index = 0;
            let currentNode = this.head
            let prevNode = null

            while (position != index) {
                prevNode = currentNode
                currentNode = currentNode.next
                index++
            }

            const temp = currentNode.data
            if (prevNode == null) {
                this.removeFirst()
                return
            }
            prevNode.next = currentNode.next
            this.size--
            return temp
        }
    }

    size() {
        return this.size
    }

    getLast() {
        if (this.isEmpty()) {
            console.log('list is empty')
            return;
        }
        let lastNode = this.head
        while (lastNode.next != null) {
            lastNode = lastNode.next
        }
        return lastNode.data
    }


    indexOf(value) {
        if (this.isEmpty()) {
            return -1
        } else {
            let index = 0
            const recusive = (node) => {
                if (node == null) return -1
                else {
                   if (node.data == value) return index
                   else {
                       index++ 
                       return recusive(node.next)
                   }
                }
            }

           return recusive(this.head)
        }
    }
}

// const test = new SingleLinkedList()

// test.addLast(1)
// test.addLast(2)
// test.addLast(3)
// test.addLast(4)

// console.log(test)