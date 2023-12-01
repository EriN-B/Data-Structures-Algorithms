class BinaryNode<T>{

    data: T
    leftNode?: BinaryNode<T>;
    rightNode?: BinaryNode<T>;

    constructor(data: T){
        this.data = data;
    }
}

class BinaryNodeException<T> {
    
    error: T;

    constructor(error: T){
        this.error = error
    }
}

class BinaryTree<T>{
    root?: BinaryNode<T>;
    comperator: (a: T, b:T) => number;

    constructor(comperator: (a:T, b:T) => number){
        this.comperator = comperator;
    }

    insert(data: T){
        if(!this.root){
            this.root = new BinaryNode(data);
            return this.root;
        }

        let current = this.root;

        while(true){
            if (this.comperator(data, current.data) === 1) {
                if(current.rightNode){
                    current = current.rightNode;
                }else{
                    current.rightNode = new BinaryNode(data);
                    return current.rightNode;
                }
            }else {
                if(current.leftNode){
                    current = current.leftNode
                }else{
                    current.leftNode = new BinaryNode(data);
                    return current.leftNode;
                }
            }
        }
    }

    search(data: T): BinaryNode<T> {
        if (!this.root) throw new BinaryNodeException('Root node is not set.');

        let current = this.root;

        while (this.comperator(data, current.data) !== 0) {
            if (this.comperator(data, current.data) > 0) {
                if (current.rightNode) {
                    current = current.rightNode;
                } else {
                    throw new BinaryNodeException('Node not found.');
                }
            } else {
                if (current.leftNode) {
                    current = current.leftNode;
                } else {
                    throw new BinaryNodeException('Node not found.');
                }
            }
        }

        return current;
    }
}
