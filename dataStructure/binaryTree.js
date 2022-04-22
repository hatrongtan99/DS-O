// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = this.right = null
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null
//     }

//     size(root) {
//         if (root == null) return 0
//         else return this.size(root.left) + 1 + this.size(root.right)
//     }

//     isEmpty(root) {
//         return this.size() == 0;
//     }

//     height(root) {
//         return this.#height(root)
//     }

//     contains(root, data) {
//         return this.#contains(root, data)
//     }

//     add(root, data) {
//         if (this.contains(root, data)) return false
//         if (root == null) this.root = new Node(data)
//         else {
//             let queue = []
//             queue.push(root)

//             while (queue.length != 0) {
//                 const temp = queue.shift()

//                 if (temp.left) queue.push(temp.left)
//                 else {
//                     temp.left = new Node(data)
//                     this.nodeCount++
//                     return
//                 }
//                 if (temp.right) queue.push(temp.right)
//                 else {
//                     temp.right = new Node(data)
//                     this.nodeCount++
//                     return
//                 }
//             }
//         }
//     }

//     deleteTree() {
//         this.root = null
//     }

//     // private

//     #height(root) {
//         if (root == null) return 0;
//         return 1 + Math.max(this.#height(root.left), this.#height(root.right));
//     }

//     #contains(root, data) {
//         if (root == null) return false;
//         else {
//             if (root.data === data) return true
//             else {
//                 const result = this.#contains(root.left, data)
//                 if (result) return result
//                 else return this.#contains(root.right, data)
//             }
//         }
//     }

    
// }

// const binaryTree = new BinaryTree()
// binaryTree.add(binaryTree.root, 1)
// binaryTree.add(binaryTree.root, 2)
// binaryTree.add(binaryTree.root, 3)
// binaryTree.add(binaryTree.root, 4)

// binaryTree.deleteTree(binaryTree.root)

// console.log(binaryTree.root)
