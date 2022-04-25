function Node (data = null) {
    this.data = data
    this.left = this.light = null
    this.nodeCount = 1

    //use recusive
    this.prevOrderTraversal = (root) => {
        if (root != null) {
            console.log(root.data)
            this.prevOrderTraversal(root.left)
            this.prevOrderTraversal(root.right)
        }
        return 
    }

    this.inOderTraversal = (root) => {
        if (root != null) {
            this.prevOrderTraversal(root.left)
            console.log(root.data)
            this.prevOrderTraversal(root.right)
        }
        return 
    }

    this.postOderTraversal = (root) => {
        if (root != null) {
            this.prevOrderTraversal(root.left)
            this.prevOrderTraversal(root.right)
            console.log(root.data)
        }
        return 
    }

    //non recusive

    this.prevOder = (root) => {
        const stack = []
        while(1) {
            while(root) {
                console.log(root.data)
                stack.push(root)
                root = root.left
            }

            if (stack.length == 0) break

            let top = stack.pop()
            root = top.right
        }
    }

    this.inOrder = (root) => {
        const stack = [];
        
        while (1) {
            while (root) {
                stack.push(root)
                root = root.left
            }

            if (stack.length == 0) break

            let top = stack.pop()

            root = top.right
        }
    }

    this.levelTraversal = (root) => {
        const queue = []
        if (root == null) return 

        queue.push(root)

        while(queue.length != 0) {
            const top = queue.shift()
            console.log(top.data)

            if (top.left) {
                queue.push(top.left)
            }

            if (top.right) {
                queue.push(top.right)
            }
        }
    }

    this.findMax = (root) => {
        if (root == null) return Number.MIN_VALUE

        let nodeValue = root.data
        let lRes = this.findMax(root.left)
        let rRes = this.findMax(root.right)

        if (lRes > nodeValue) nodeValue = lRes
        if (rRes > nodeValue) nodeValue = rRes
        return nodeValue
    }

    this.findMax = (root) => {
        const queue = []
        if (!root) return
        
        queue.push(root)
        let max = root.data

        while (queue.length != 0) {
            const temp = queue.shift()

            if (temp.data > max) max = temp.data

            if (temp.left) queue.push(temp.left)

            if (temp.right) queue.push(temp.right)
        }

        return max
    }

    this.contain = (root, data) => {
        if (root == null) return false
        if (data == root.data) return true
        else {
            let temp = this.contain(root.left, data)
            if (!temp) {
                temp = this.contain(root.right, data)
            }
            return temp
        }
    }

    this.insert = (root ,value) => {
        const newNode = new Node(value)
        let queue = []

        if (!root) {
            root = newNode
        } else {
            queue.push(root)

            while (queue.length != 0) {
                let temp = queue.shift()

                if (temp.left) queue.push(temp.left)
                else {
                    temp.left = newNode 
                    queue = []
                    this.nodeCount++
                    return
                }

                if (temp.right) queue.push(temp.right)
                else {
                    temp.right = newNode  
                    queue = []
                    this.nodeCount++
                    return
                }
            }
        }
    }

    this.size = (root) => {
        if (!root) return 0
        return this.size(root.left) + 1 + this.size(root.right)
    }

    this.height = (root) => {
        if (root == null) return 0
        else return 1 + Math.max(this.height(root.left), this.height(root.right))
    }
}

const root = new Node(1)
root.insert(root, 2)    
root.insert(root, 3)
root.insert(root, 4)
root.insert(root, 5)
root.insert(root, 6)
root.insert(root, 7)

console.log(root.height(root))
console.log(root.size(root))





