// const array = ['Diego', 'Gerson', 'Arlet'];
// console.log(array);

// array.push('Ana');
// console.log(array);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift() {
    this.delete(0);
    this.length--;
  }

  shift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
  }
}

const myArray = new MyArray();

myArray.push('Yesid0');
myArray.push('Yesid1');
myArray.push('Yesid2');
myArray.push('Yesid3');
console.log(myArray);

myArray.shift('Gerson');
console.log(myArray);

myArray.unshift();
console.log(myArray);
