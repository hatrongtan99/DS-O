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

class HashMapOpenChainingDL {
    #DEFAULT_CAPACITY = 10
    #DEFAULT_LOAD_FACTOR = 0.6
    #thresHold = this.#DEFAULT_CAPACITY * this.#DEFAULT_LOAD_FACTOR

    constructor() {
        this.size = 0
        this.table = new Array(this.#DEFAULT_CAPACITY).fill(null)
    }

    #hashFunction(key) {
        const keyToString = key.toString()
        let numHash = 0
        for (let i = 0; i < keyToString.length; i++) {
            numHash += keyToString.charCodeAt(i)
        }
        return numHash % this.#DEFAULT_CAPACITY
    }

    #resize() {
        this.#DEFAULT_CAPACITY *= 2
        this.#thresHold = this.#DEFAULT_CAPACITY * this.#DEFAULT_LOAD_FACTOR
        const newTable = new Array(this.#DEFAULT_CAPACITY).fill(null)

        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] == null) continue

            let currentNode = this.table[i].head

            while (currentNode != null) {
                const bucketIndex = this.#hashFunction(currentNode.key)
                let bucket = newTable[bucketIndex]
                if (bucket == null) {
                    const doublyLinkedList = new DoublyLinkedList()
                    bucket = newTable[bucketIndex] = doublyLinkedList
                    bucket.add(currentNode.key, currentNode.value)
                } else {
                    bucket.add(currentNode.key, currentNode.value)
                }
                currentNode = currentNode.next
            }
        }
        this.table = newTable
    }

    isEmpty() {
        return this.size == 0
    }

    size() {
        return this.size
    }

    insert(key, value) {
        const bucketIndex = this.#hashFunction(key)
        let bucket = this.table[bucketIndex]
        
        if (bucket == null) {
            const doublyLinkedList = new DoublyLinkedList()
            bucket = this.table[bucketIndex] = doublyLinkedList
            bucket.add(key, value)
            this.size++
        } else {
            bucket.add(key, value)
        }

        if (this.size == this.#thresHold) this.#resize()
        return
    }

    remove(key) {
        if (this.isEmpty()) return null
        const bucketIndex = this.#hashFunction(key)
        let bucket = this.table[bucketIndex]
        if (bucket == null || bucket.isEmpty()) return null

        const temp = bucket.remove(key)
        if (bucket.isEmpty()) {
            bucket = this.table[bucketIndex] = null
            this.size--
        }
        return temp
    }

    get(key) {
        if (this.isEmpty()) return null

        const bucketIndex = this.#hashFunction(key);
        let bucket = this.table[bucketIndex];

        if (bucket == null || bucket.isEmpty()) return null

        let currentNode = bucket.head
        while (currentNode != null) {
            if (currentNode.key == key) return {[currentNode.key]: currentNode.value}
            currentNode = currentNode.next
        }
        return null
    }

}

