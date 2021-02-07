class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoulblyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    newNode.prev = firstPointer;
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  deleteFirst() {
    const nodeToDelete = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return nodeToDelete;
  }

  deleteLast() {
    const nodeToDelete = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return nodeToDelete;
  }

  remove(index) {
    let currentNode = this.head;
    if (this.length === 0) {
      console.log('Console is already empty');
    }
    if (index <= 0) {
      this.head = this.head.next;
    } else if (index >= this.length - 1) {
      while (currentNode.next.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    } else {
      let counter = 0;
      while (counter < index) {
        currentNode = currentNode.next;
        counter++;
      }
      currentNode.next = currentNode.next.next;
    }
    this.length--;
  }
}

let MyDoulblyList = new MyDoulblyLinkedList(1);
console.log(MyDoulblyList.append(2));
console.log(MyDoulblyList.append(3));
console.log(MyDoulblyList.append(4));
console.log(MyDoulblyList.append(5));
// console.log(myLinkedList.prepend(0));
// console.log(myLinkedList.insert(2, 6));
// console.log(myLinkedList);
// console.log(myLinkedList.remove(2));
// console.log(myLinkedList);
