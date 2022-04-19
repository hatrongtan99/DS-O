class Queue {
    constructor() {
        this.capacity = 5;
        this.lists = new Array(this.capacity).fill(null);
        this.front = this.rear = -1
    }

    isFull() {
        if (this.rear == this.capacity - 1) return true
        return false
    }

    isEmpty() {
        if (this.front == - 1) return true
        return false
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log('lists is full')
        } else if (this.isEmpty()) {
            this.front = this.rear = 0
            this.lists[this.rear] = value
        } else {
            this.rear++
            this.lists[this.rear] = value
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('lists is empty')
        } else if (this.front == this.rear) {
            const value = this.lists[this.front]
            this.lists[this.front] = null
            this.front = this.rear = -1
            return value
        } else {
            const value = this.lists[this.front]
            this.lists[this.front] = null
            this.front ++
            return value
        }
    }

    peek() {
        if(!this.isEmpty()) {
            return this.lists[this.front]
        }
        return undefined
    }

    size() {
        if (this.front == 0) return this.rear + 1
        if (this.front > 0) return this.rear + 1 - this.front
        return 0
    }
}

// const queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(1)
// queue.enqueue(1)
// queue.enqueue(1)
// queue.enqueue(1)

// queue.dequeue()
// queue.dequeue()

// console.log(queue.lists)
// console.log(queue.size())
// console.log(queue.front)
// console.log(queue.rear)



class CicularQueue {
    constructor() {
        this.capacity = 5;
        this.lists = new Array(this.capacity).fill(null);
        this.front = this.rear = -1
    }

    isFull() {
        if(this.front == 0 && this.rear == this.capacity - 1) {
            return true
        } else if (this.front == this.rear + 1) {
            return true
        } else return false
    }

    isEmpty() {
        if (this.front == - 1) return true
        return false
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log('lists is full')
        } else if (this.isEmpty()) {
            this.front = this.rear = 0;
            this.lists[this.rear] = value
        } else {
            this.rear = (this.rear + 1) % this.capacity
            this.lists[this.rear] = value
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('lists is empty')
        } else if (this.front == this.rear) {
            const value = this.lists[this.front]
            this.lists[this.front] = null
            this.front = this.rear = -1
            return value
        } else {
            const value = this.lists[this.front];
            this.lists[this.front] = null
            this.front = (this.front + 1) % this.capacity
            return value
        }
    }

    size() {
        if (this.front == 0) return this.rear + 1
        if (this.front != 0 && this.rear > this.front) return this.rear + 1 - this.front
        if (this.front > this.rear) return this.capacity - this.front + this.rear + 1
        return 0
    }
}

// const cicularQueue = new CicularQueue();

// cicularQueue.enqueue(1)
// cicularQueue.enqueue(1)
// cicularQueue.enqueue(1)
// cicularQueue.enqueue(1)

// cicularQueue.dequeue()
// cicularQueue.dequeue()

// console.log(cicularQueue.lists)
// console.log(cicularQueue.size())
// console.log(cicularQueue.front)
// console.log(cicularQueue.rear)
