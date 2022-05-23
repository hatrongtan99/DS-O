class MinHeap {
    #MAX_SIZE = 100
    constructor() {
        this.size = 0;
        this.list = new Array(this.#MAX_SIZE + 1);
    }

    #swap(i, j) {
        const temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }

    #heapifyDown(curIndex) {
        while (parseInt(curIndex * 2) <= this.size) {
            let leftIndex = parseInt(curIndex * 2)
            let smaler = leftIndex
            const rightIndex = leftIndex + 1
            if (rightIndex <= this.size) {
                if (this.list[rightIndex] < this.list[leftIndex]) {
                    smaler = rightIndex
                }
            }

            if (this.list[curIndex] > this.list[smaler]) {
                this.#swap(curIndex, smaler)
                curIndex = smaler
                leftIndex = parseInt(curIndex * 2)
            } else break
        }
    }

    isEmpty() {
        return this.size == 0
    }

    insert(value) {
        this.size++
        this.list[this.size] = value;

        let curIndex = this.size
        let parrentIndex = parseInt(curIndex / 2)

        while (parrentIndex > 0 && this.list[parrentIndex] > this.list[curIndex]) {
            this.#swap(parrentIndex, curIndex)
            curIndex = parrentIndex
            parrentIndex = parseInt(curIndex / 2)
        }
    }

    peek() {
        return this.list[1]
    }

    poll() {
        if (this.isEmpty()) {
            throw new Error ('Heap is empty')
        }
        const temp = this.list[1]
        this.list[1] = this.list[this.size]
        this.size--
        
        let curIndex = 1
        
        this.#heapifyDown(curIndex)

        return temp
    }

    remove(value) {
        if (this.isEmpty()) {
            throw new Error ('Heap is empty')
        }

        let indexRemoved

        for (let i = 1; i <= this.size; i++) {
            if (this.list[i] == value) {
                indexRemoved = i
            }
        }

        if (indexRemoved > 0) {
            const temp = this.list[indexRemoved]
            this.list[indexRemoved] = this.list[this.size]
            this.size--
            this.#heapifyDown(indexRemoved)
            return temp
        }

        return -1
    }
}

const myHeap = new MinHeap()

myHeap.insert(6)
myHeap.insert(1)
myHeap.insert(2)
myHeap.insert(4)
myHeap.insert(7)
myHeap.insert(8)
myHeap.insert(3)

console.log(myHeap.remove(6))

const size = myHeap.size

for (let i = 0; i < size; i++) {
    console.log(myHeap.poll())
}

