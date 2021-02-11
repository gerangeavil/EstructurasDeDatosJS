class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //metodo para devolver el ultimo elemento de la cola
  peek() {
    return this.first;
  }

  //metodo para agregar elemento al final de la cola
  enQueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  //metodo para remover el primer elemento de la cola
  deQueue() {
    if (this.length === 0) {
      console.log('Queue vacia');
    } else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return this;
  }
}

let myQueue = new Queue();

console.log(myQueue.peek());

console.log(myQueue.peek());
