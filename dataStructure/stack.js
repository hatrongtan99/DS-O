
class SingleStack {
    constructor() {
        this.capacity = 5;
        this.lists = new Array(this.capacity).fill(null);
        this.index = -1
    }

    isFull() {
        if (this.index == this.capacity - 1) return true
        return false
    }

    isEmpty() {
        if (this.index == -1) return true
        return false
    }

    push(value) {
        if (this.isFull()){
            console.log('lists is full')
        } else {
            this.index++
            this.lists[this.index] = value
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log('lists is empty')
        } else {
            const value = this.lists[this.index]
            this.lists[this.index] = null
            this.index--
            return value
        }
    }

    peek() {
        return this.lists[this.index]
    }

    size() {
        return this.index + 1
    }
}

// const stack = new SingleStack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)

// console.log(stack.peek())
// console.log(stack.lists)
// console.log(stack.index)

class DynamicStack extends SingleStack {

    // constructor() {
    //     super();
    //     this.capacity = 5
    // }
    
    push(value) {
        if (this.index == this.capacity - 1) {
            this.capacity *= 2
        }
        super.push(value)
    }
}

// const dynamicStack = new DynamicStack()

// dynamicStack.push(1)
// dynamicStack.push(2)
// dynamicStack.push(3)
// dynamicStack.push(4)
// dynamicStack.push(5)
// dynamicStack.push(6)
// dynamicStack.push(7)
// // dynamicStack.pop()

// console.log(dynamicStack)
// console.log(dynamicStack.capacity)