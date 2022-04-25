class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    inOrderTraversal(root) {
        if (root) {
            this.inOrderTraversal(root.left)
            console.log(root.data)
            this.inOrderTraversal(root.right)
        }
    }

    prevOrderTraversal(root) {
        if (root) {
            console.log(root.data)
            this.prevOrderTraversal(root.left)
            this.prevOrderTraversal(root.right)
        }
    }

    postOderTraversal(root) {
        if (root) {
            this.postOderTraversal(root.left)
            this.postOderTraversal(root.right)
            console.log(root.data)
        }
    }

    height(root) {
        if (root == null) return 0;
        return 1 + Math.max(this.height(root.left), this.height(root.right)); 
    }

    size(root) {
        if (root == null) return 0
        return this.size(root.left) + 1 + this.size(root.right)
    }

// no recusive

    inOder(root) {
        const stack = [];
        while(1) {
            while(root != null) {
                stack.push(root)
                root = root.left
            }

            if (stack.length == 0) break

            const top = stack.pop()
            console.log(top.data)
            root = root.right
        }
    }

    preOder(root) {
        const stack = []
        while(1) {
            while(root != null) {
                console.log(root.data)
                stack.push(root)
                root = root.left
            }

            if (stack.length == 0 ) break;
            root = stack.pop()
            root = root.right

        }
    }

    postOder(root) {

    }

    levelOder(root) {
        if (root == null) return 
        const queue = [];
        queue.push(root)

        while(queue.length != 0) {
            const temp = queue.shift()
            console.log(temp.data)
            if (temp.left) queue.push(temp.left)
            if (temp.right) queue.push(temp.right)
        }
    }
    
    contains(root, data) {
        return this.#contains(root, data)
    }

    add(root, data) {
        if (this.contains(root, data)) return false
        if (root == null) this.root = new Node(data)
        else {
            let queue = []
            queue.push(root)

            while (queue.length != 0) {
                const temp = queue.shift()

                if (temp.left) queue.push(temp.left)
                else {
                    temp.left = new Node(data)
                    this.nodeCount++
                    return
                }
                if (temp.right) queue.push(temp.right)
                else {
                    temp.right = new Node(data)
                    this.nodeCount++
                    return
                }
            }
        }
    }

    deleteTree() {
        this.root = null
    }

    // private

    #height(root) {
        if (root == null) return 0;
        return 1 + Math.max(this.#height(root.left), this.#height(root.right));
    }

    #contains(root, data) {
        if (root == null) return false;
        else {
            if (root.data === data) return true
            else {
                const result = this.#contains(root.left, data)
                if (result) return result
                else return this.#contains(root.right, data)
            }
        }
    }
}

const binaryTree = new BinaryTree()
binaryTree.add(binaryTree.root, 1)
binaryTree.add(binaryTree.root, 2)
binaryTree.add(binaryTree.root, 3)
binaryTree.add(binaryTree.root, 4)

binaryTree.deleteTree(binaryTree.root)

console.log(binaryTree.root)
