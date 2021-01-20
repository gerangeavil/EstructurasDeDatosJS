/*
let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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

let myLinkedList = new MySinglyLinkedList(1);
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(4));
console.log(myLinkedList.append(5));
console.log(myLinkedList.prepend(0));
console.log(myLinkedList.insert(2, 6));
console.log(myLinkedList);
console.log(myLinkedList.remove(2));
console.log(myLinkedList);
