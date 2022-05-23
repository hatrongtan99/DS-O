class Node {
    constructor(data) {
        this.data = data
        this.left = this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        root = null
    }

    isEmpty() {
        return this.size() == 0
    }

    size(root) {
        if (root == null) return 0
        return 1 + this.size(root.left) + this.size(root.right)
    }

    height(root) {
        return this.#height(root)
    }

    contains(root, data) {
        return this.#contains(root, data)
    }

    add(root, data) {
        if (this.contains(root, data)) return false
        this.root = this.#add(root, data)
        return true
    }

    remove(root, data) {
        if (!this.contains(root, data)) return false

        this.root = this.#remove(root, data)
        return true
    }

    // private

    #height(root) {
        if (root == null) return 0
        else return 1 + Math.max(this.#height(root.left), this.#height(root.right));
    }

    #contains(root, data) {
        if (root == null) return false
        else if (data < root.data) {
           return this.contains(root.left, data)
        } else if (data > root.data) {
           return this.contains(root.right, data)
        } else return true
    }

    #add(root, data) {
        if (root == null) root = new Node(data)
        else {
            if (data < root.data) {
                root.left = this.#add(root.left, data)
            } else {
                root.right = this.#add(root.right, data)
            }
        }
        return root
    }

    #remove(root, data) {
        if (data < root.data) {
            root.left = this.#remove(root.left, data)
        }

        if (data > root.data) {
            root.right = this.#remove(root.right, data)
        } else {
            if (root.left == null) {
                return root.right
            } else if (root.right == null) {
                return root.left
            } else {
                const maxLeft = this.#maxLeft(root.left)
                root.data = maxLeft
                root.left = this.#remove(root.left, root.data)
            }
        }
        return root
    }

    #minright(root) {
        while (root.left != null) {
            root = root.left
        }
        return root.data
    }

    #maxLeft(root) {
        while (root.right != null) {
            root = root.right
        }
        return root.data
    }
}

const binarySearch = new BinarySearchTree()

binarySearch.add(binarySearch.root, 2)
binarySearch.add(binarySearch.root, 1)
binarySearch.add(binarySearch.root, 3)
binarySearch.add(binarySearch.root, 5)
binarySearch.add(binarySearch.root, 4)


// console.log(binarySearch.contains(binarySearch.root, 10))
// console.log(binarySearch.remove(binarySearch.root, 4))


binarySearch.remove(binarySearch.root, 2)
console.log(binarySearch.root)
